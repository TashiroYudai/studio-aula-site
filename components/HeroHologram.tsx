"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { line, concerns, concernDetails } from "@/lib/site";

/* ──────────────────────────────────────────────────────────────────────────
   studio Aula — HERO ＝「生体ホログラム」3D スクロール診断
   人体を 3D プリミティブ（頭=楕円体 / 胴=楕円断面の柱 / 手足=円錐カプセル）の
   表面に点を撒いて生成。毎フレーム Y軸回転＋パース投影＋奥行きソートで本物の立体に。
   ① 読み込みで点が集合して 3D 人体に ② スクロールで肩→腰→膝へズームイン（突入で
   散らばり→その部位の 3D クローズアップが回転）。各段で解説カード。
   reduced-motion / JS無効時は静止した正面 3D＋ノード名＋解説カード縦積みにフォールバック。
   ────────────────────────────────────────────────────────────────────────── */

const GLOW: [number, number, number] = [127, 227, 245]; // #7FE3F5
const PARTICLE_RGB: [number, number, number][] = [
  [10, 72, 110], // #0A486E
  [20, 112, 152], // #147098
  [48, 146, 188], // #3092BC
  [104, 190, 220], // #68BEDC
];

// ── カメラ（3D）定数 ──
const TILT = 0.08; // 少し上から見る
const CAMD = 3.4; // カメラ距離
const FOC = 3.4; // 焦点
const ZOOM3D = 2.0; // 注目時の拡大

// お悩みノード（体側の 3D 位置・静止ラベル用）。concernDetails と同順。
type NodeDef = { label: string; sub: string; x: number; y: number; z: number; side: "l" | "r" };
const NODES: NodeDef[] = [
  { label: "肩こり", sub: "肩・首", x: 0.4, y: 0.96, z: 0.15, side: "r" },
  { label: "腰痛", sub: "腰まわり", x: 0.26, y: 0.42, z: 0.17, side: "r" },
  { label: "膝痛", sub: "ひざ・歩行", x: -0.18, y: -0.74, z: 0.14, side: "l" },
];

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// カメラの注視“高さ”（body-Y）。各お悩みで dwell（とどまる）→次へパン。
const CAM_KF: [number, number][] = [
  [0.16, 0.95],
  [0.4, 0.95], // 肩
  [0.44, 0.42],
  [0.66, 0.42], // 腰
  [0.7, -0.74],
  [0.92, -0.74], // 膝
];
function camTargetY(p: number): number {
  if (p <= CAM_KF[0][0]) return CAM_KF[0][1];
  for (let i = 1; i < CAM_KF.length; i++) {
    if (p <= CAM_KF[i][0]) {
      const [p0, y0] = CAM_KF[i - 1];
      const [p1, y1] = CAM_KF[i];
      return y0 + (y1 - y0) * ((p - p0) / (p1 - p0));
    }
  }
  return CAM_KF[CAM_KF.length - 1][1];
}
const zoomAmt = (p: number) => smoothstep(0.14, 0.23, p) * (1 - smoothstep(0.86, 0.93, p));
function scatterAmt(p: number): number {
  const bump = (cc: number) => Math.max(0, 1 - Math.abs(p - cc) / 0.05);
  return Math.min(1, bump(0.18) + bump(0.46) + bump(0.72));
}
function stepFromP(p: number): number {
  if (p < 0.16) return -1;
  if (p < 0.42) return 0;
  if (p < 0.68) return 1;
  if (p < 0.92) return 2;
  return 3;
}

export function HeroHologram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [animate, setAnimate] = useState(false);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const stage = stageRef.current as HTMLDivElement;
    if (!canvas || !stage) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setAnimate(!reduce);

    let dpr = 1;
    let W = 0;
    let H = 0;
    let mesh: HTMLCanvasElement | null = null;

    // 3D 点群（body 座標: y上・原点は骨盤付近）
    let bxA: number[] = [];
    let byA: number[] = [];
    let bzA: number[] = [];
    let brA: number[] = []; // 点の基本半径（units）
    let bcA: number[] = []; // 色 index
    let ivx: number[] = []; // 集合/散らばりの乱数ベクトル
    let ivy: number[] = [];
    let ivz: number[] = [];
    // 画面座標キャッシュ
    let sxs: number[] = [];
    let sys: number[] = [];
    let szs: number[] = []; // 回転後 z（奥行き）
    let sss: number[] = []; // パース係数
    let fds: number[] = [];
    let order: number[] = [];

    let baseWS = 300; // px per unit（フィット後）
    let camCX = 0;
    let camCY = 0;
    let bodyCenterY = -0.05;
    let n = 0;

    let progress = 0;
    let stepNow = -1;

    function pickColorIndex(yNorm: number): number {
      const rnd = Math.random();
      if (yNorm > 0.72) return rnd < 0.55 ? 1 : 2; // 頭・上部はやや淡い
      if (rnd < 0.28) return 0;
      if (rnd < 0.66) return 1;
      if (rnd < 0.9) return 2;
      return 3;
    }

    function build() {
      const rect = stage.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      W = Math.max(1, Math.round(rect.width * dpr));
      H = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      const mobile = rect.width < 760;
      const dens = mobile ? 0.72 : 1;

      bxA = [];
      byA = [];
      bzA = [];
      let yMin = 1e9;
      let yMax = -1e9;
      let xAbs = 0;

      const push = (x: number, y: number, z: number) => {
        bxA.push(x);
        byA.push(y);
        bzA.push(z);
        if (y < yMin) yMin = y;
        if (y > yMax) yMax = y;
        const ax = Math.abs(x);
        if (ax > xAbs) xAbs = ax;
      };
      const C = (v: number) => Math.round(v * dens);

      // 楕円体（頭・肩・手・足）
      const addEllipsoid = (cx: number, cy: number, cz: number, rx: number, ry: number, rz: number, count: number) => {
        for (let k = 0; k < count; k++) {
          const u = Math.random() * 2 - 1;
          const th = Math.random() * Math.PI * 2;
          const s = Math.sqrt(1 - u * u);
          push(cx + s * Math.cos(th) * rx, cy + u * ry, cz + s * Math.sin(th) * rz);
        }
      };
      // 縦・楕円断面の柱（首・胴）: 世界の x=幅 / z=奥行き
      const addVTube = (
        topY: number,
        botY: number,
        rxT: number,
        rzT: number,
        rxB: number,
        rzB: number,
        count: number,
        xoff = 0,
        zoff = 0
      ) => {
        for (let k = 0; k < count; k++) {
          const t = Math.random();
          const y = topY + (botY - topY) * t;
          const rX = rxT + (rxB - rxT) * t;
          const rZ = rzT + (rzB - rzT) * t;
          const th = Math.random() * Math.PI * 2;
          push(xoff + Math.cos(th) * rX, y, zoff + Math.sin(th) * rZ);
        }
      };
      // 任意軸の円錐カプセル側面（腕・脚）
      const addTube = (
        ax: number,
        ay: number,
        az: number,
        bx: number,
        by: number,
        bz: number,
        ra: number,
        rb: number,
        count: number
      ) => {
        let dx = bx - ax;
        let dy = by - ay;
        let dz = bz - az;
        const L = Math.hypot(dx, dy, dz) || 1;
        dx /= L;
        dy /= L;
        dz /= L;
        let hx = 0;
        let hy = 1;
        let hz = 0;
        if (Math.abs(dy) > 0.9) {
          hx = 1;
          hy = 0;
          hz = 0;
        }
        let ux = dy * hz - dz * hy;
        let uy = dz * hx - dx * hz;
        let uz = dx * hy - dy * hx;
        const ul = Math.hypot(ux, uy, uz) || 1;
        ux /= ul;
        uy /= ul;
        uz /= ul;
        const vx = dy * uz - dz * uy;
        const vy = dz * ux - dx * uz;
        const vz = dx * uy - dy * ux;
        for (let k = 0; k < count; k++) {
          const t = Math.random();
          const cx = ax + (bx - ax) * t;
          const cy = ay + (by - ay) * t;
          const cz = az + (bz - az) * t;
          const rr = ra + (rb - ra) * t;
          const th = Math.random() * Math.PI * 2;
          const cc = Math.cos(th) * rr;
          const ssn = Math.sin(th) * rr;
          push(cx + ux * cc + vx * ssn, cy + uy * cc + vy * ssn, cz + uz * cc + vz * ssn);
        }
      };

      // ── 人体（y上, 原点=骨盤付近）— 洗練された等身：頭小・細首・胸→腰のV字・手足テーパー ──
      addEllipsoid(0, 1.42, 0.02, 0.155, 0.215, 0.175, C(300)); // 頭（小さめ・縦長）
      addEllipsoid(0, 1.3, 0.05, 0.11, 0.09, 0.11, C(60)); // 顎まわりのボリューム
      addVTube(1.24, 1.0, 0.08, 0.07, 0.1, 0.09, C(80)); // 首（細い）
      addVTube(1.02, 0.5, 0.4, 0.2, 0.25, 0.155, C(600)); // 胸→くびれ（V字）
      addVTube(0.5, 0.03, 0.25, 0.155, 0.34, 0.19, C(380)); // くびれ→骨盤
      addEllipsoid(-0.38, 0.98, 0.02, 0.135, 0.12, 0.13, C(85)); // 左肩（控えめ三角筋）
      addEllipsoid(0.38, 0.98, 0.02, 0.135, 0.12, 0.13, C(85)); // 右肩
      addTube(-0.4, 0.96, 0.03, -0.48, 0.46, 0.05, 0.11, 0.085, C(170)); // 左上腕
      addTube(-0.48, 0.46, 0.05, -0.55, -0.05, 0.1, 0.085, 0.062, C(150)); // 左前腕
      addEllipsoid(-0.57, -0.14, 0.11, 0.07, 0.11, 0.05, C(55)); // 左手
      addTube(0.4, 0.96, 0.03, 0.48, 0.46, 0.05, 0.11, 0.085, C(170));
      addTube(0.48, 0.46, 0.05, 0.55, -0.05, 0.1, 0.085, 0.062, C(150));
      addEllipsoid(0.57, -0.14, 0.11, 0.07, 0.11, 0.05, C(55));
      addTube(-0.15, 0.03, 0.0, -0.18, -0.74, 0.02, 0.175, 0.115, C(280)); // 左太もも
      addTube(-0.18, -0.74, 0.02, -0.18, -1.46, 0.0, 0.115, 0.065, C(230)); // 左すね
      addEllipsoid(-0.18, -1.53, 0.12, 0.08, 0.058, 0.17, C(55)); // 左足
      addTube(0.15, 0.03, 0.0, 0.18, -0.74, 0.02, 0.175, 0.115, C(280));
      addTube(0.18, -0.74, 0.02, 0.18, -1.46, 0.0, 0.115, 0.065, C(230));
      addEllipsoid(0.18, -1.53, 0.12, 0.08, 0.058, 0.17, C(55));

      n = bxA.length;
      const bodyH = yMax - yMin;
      bodyCenterY = (yMin + yMax) / 2;

      // 色・半径・乱数ベクトル
      brA = new Array(n);
      bcA = new Array(n);
      ivx = new Array(n);
      ivy = new Array(n);
      ivz = new Array(n);
      for (let i = 0; i < n; i++) {
        const yNorm = (byA[i] - yMin) / bodyH;
        bcA[i] = pickColorIndex(yNorm);
        brA[i] = Math.random() < 0.05 ? 0.0075 + Math.random() * 0.005 : 0.0042 + Math.random() * 0.0032;
        // 集合/散らばり用の乱数ベクトル（球状）
        const u = Math.random() * 2 - 1;
        const th = Math.random() * Math.PI * 2;
        const s = Math.sqrt(1 - u * u);
        const mag = 1.1 + Math.random() * 1.4;
        ivx[i] = s * Math.cos(th) * mag;
        ivy[i] = u * mag + 0.3;
        ivz[i] = s * Math.sin(th) * mag;
      }
      sxs = new Array(n);
      sys = new Array(n);
      szs = new Array(n);
      sss = new Array(n);
      fds = new Array(n);
      order = new Array(n);

      // 画面へフィット（高さ基準・幅も収める）
      const cssH = rect.height;
      const cssW = rect.width;
      baseWS = Math.min((0.86 * H) / bodyH, (0.6 * W) / (2 * (xAbs + 0.12)));
      camCX = (mobile ? 0.52 : 0.66) * cssW * dpr;
      camCY = 0.47 * H;

      buildMesh();
      layoutLabels(cssW, cssH);
    }

    function buildMesh() {
      const m = document.createElement("canvas");
      m.width = W;
      m.height = H;
      const g = m.getContext("2d");
      if (!g) return;
      const a = 30 * dpr;
      const hx = 1.5 * a;
      const hy = Math.sqrt(3) * a;
      g.lineWidth = Math.max(0.6, 0.8 * dpr);
      g.strokeStyle = "rgba(120,175,205,0.12)";
      const cols = Math.ceil(W / hx) + 2;
      const rows = Math.ceil(H / hy) + 2;
      for (let c = -1; c < cols; c++) {
        for (let r = -1; r < rows; r++) {
          const ccx = c * hx;
          const ccy = r * hy + (c & 1 ? hy / 2 : 0);
          g.beginPath();
          for (let k = 0; k < 6; k++) {
            const ang = (k * Math.PI) / 3;
            if (k === 0) g.moveTo(ccx + a * Math.cos(ang), ccy + a * Math.sin(ang));
            else g.lineTo(ccx + a * Math.cos(ang), ccy + a * Math.sin(ang));
          }
          g.closePath();
          g.stroke();
          if ((c + r) % 3 === 0) {
            g.fillStyle = "rgba(120,175,205,0.2)";
            g.beginPath();
            g.arc(ccx, ccy, 1.4 * dpr, 0, Math.PI * 2);
            g.fill();
          }
        }
      }
      mesh = m;
    }

    // 静止時のノード名ラベル配置（正面投影・reduced/no-JS）
    function layoutLabels(cssW: number, cssH: number) {
      const cX = Math.cos(TILT);
      const sX = Math.sin(TILT);
      NODES.forEach((nd, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const y2 = nd.y * cX - nd.z * sX;
        const z2 = nd.y * sX + nd.z * cX;
        const ss = FOC / (CAMD - z2);
        const px = (camCX + nd.x * baseWS * ss) / dpr;
        const py = (camCY - (y2 - bodyCenterY) * baseWS * ss) / dpr;
        const gap = 24;
        el.style.top = (py / cssH) * 100 + "%";
        if (nd.side === "r") {
          el.style.left = Math.min(px + gap, cssW - 8) + "px";
          el.style.right = "auto";
        } else {
          el.style.left = "auto";
          el.style.right = Math.min(cssW - px + gap, cssW - 8) + "px";
        }
        el.style.transform = "translateY(-50%)";
      });
    }

    // ── 描画 ──
    let raf = 0;
    let start = -1;

    function draw(now: number) {
      if (start < 0) start = now;
      const t = now - start;
      const intro = reduce ? 1 : Math.min(t / 1900, 1);
      const p = reduce ? 0 : progress;

      let zoom = 0;
      let camTY = bodyCenterY;
      let scatterA = 0;
      if (!reduce && intro > 0.55) {
        zoom = zoomAmt(p);
        camTY = camTargetY(p);
        scatterA = scatterAmt(p) * zoom;
      }

      // 回転：ヒーローはゆっくり首振り、ズーム時はターンテーブル回転
      const ry = reduce ? 0 : 0.4 * Math.sin(t * 0.00034) + zoom * (t * 0.0004 + p * 2.2);
      const cY = Math.cos(ry);
      const sY = Math.sin(ry);
      const cX = Math.cos(TILT);
      const sX = Math.sin(TILT);
      const anchorY = bodyCenterY + (camTY - bodyCenterY) * zoom;
      const WS = baseWS * (1 + (ZOOM3D - 1) * zoom);
      const bandY = 0.72;

      ctx.clearRect(0, 0, W, H);
      if (mesh) ctx.drawImage(mesh, 0, 0);

      // 背景発光（注視点に寄る）
      const glowCy = zoom > 0.02 ? camCY : H * 0.44;
      const glowR = H * (0.5 + 0.2 * zoom);
      const rg = ctx.createRadialGradient(camCX, glowCy, 0, camCX, glowCy, glowR);
      rg.addColorStop(0, `rgba(127,227,245,${(0.16 + 0.16 * zoom).toFixed(3)})`);
      rg.addColorStop(0.55, "rgba(120,200,230,0.06)");
      rg.addColorStop(1, "rgba(120,200,230,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, W, H);

      // 投影
      for (let i = 0; i < n; i++) {
        const g = reduce ? 1 : easeOutCubic(intro); // 集合の進捗
        const asm = (1 - g) + scatterA * 0.45; // 集合前＋各お悩み突入時の散らばり
        const X = bxA[i] + ivx[i] * asm;
        const Y = byA[i] + ivy[i] * asm;
        const Z = bzA[i] + ivz[i] * asm;
        // Y軸回転
        const x1 = X * cY + Z * sY;
        const z1 = -X * sY + Z * cY;
        const y1 = Y;
        // X軸チルト
        const y2 = y1 * cX - z1 * sX;
        const z2 = y1 * sX + z1 * cX;
        const ss = FOC / (CAMD - z2);
        sxs[i] = camCX + x1 * WS * ss;
        sys[i] = camCY - (y2 - anchorY) * WS * ss;
        szs[i] = z2;
        sss[i] = ss;
        fds[i] = g;
        order[i] = i;
      }

      // 奥行きソート（奥→手前）
      order.sort((a, b) => szs[a] - szs[b]);

      // 描画
      for (let oi = 0; oi < n; oi++) {
        const i = order[oi];
        const ss = sss[i];
        const c = PARTICLE_RGB[bcA[i]];
        let cr = c[0];
        let cg = c[1];
        let cb = c[2];
        // 奥行きキュー（手前=大・明 / 奥=小・暗）
        const dN = clamp(szs[i] / 0.55, -1, 1);
        let r = brA[i] * WS * ss * (0.72 + 0.5 * (dN * 0.5 + 0.5));
        let a = (0.62 + 0.34 * (bcA[i] >= 2 ? 1 : 0.66)) * (0.52 + 0.48 * (dN * 0.5 + 0.5));
        if (zoom > 0.001) {
          const nearReg = clamp(1 - Math.abs(byA[i] - camTY) / bandY, 0, 1);
          a *= 1 - 0.55 * zoom * (1 - nearReg);
          const m = zoom * nearReg;
          cr += (GLOW[0] - cr) * 0.32 * m;
          cg += (GLOW[1] - cg) * 0.32 * m;
          cb += (GLOW[2] - cb) * 0.32 * m;
        }
        a *= fds[i];
        if (a <= 0.004 || r <= 0.05) continue;
        ctx.fillStyle = `rgba(${cr | 0},${cg | 0},${cb | 0},${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sxs[i], sys[i], r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 静止（reduced/no-JS）時：ノード名ラベル点灯
      if (reduce) {
        for (let i = 0; i < NODES.length; i++) {
          const el = labelRefs.current[i];
          if (el) {
            const dot = el.querySelector<HTMLElement>("[data-dot]");
            if (dot) dot.style.opacity = "1";
            el.style.setProperty("--lit", "1");
          }
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    }

    // ── オーバーレイ更新 ──
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const el = secRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const pp = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
        progress = pp;
        const o = 1 - smoothstep(0.05, 0.15, pp);
        if (copyRef.current) {
          copyRef.current.style.opacity = o.toFixed(3);
          copyRef.current.style.transform = `translateY(${(-26 * (1 - o)).toFixed(1)}px)`;
          copyRef.current.style.pointerEvents = o < 0.05 ? "none" : "auto";
        }
        if (hintRef.current) hintRef.current.style.opacity = o.toFixed(3);
        if (barRef.current) barRef.current.style.width = (pp * 100).toFixed(1) + "%";
        const s = stepFromP(pp);
        if (s !== stepNow) {
          stepNow = s;
          setStep(s);
        }
      });
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        if (reduce) draw(0);
      }, 160);
    };

    build();

    if (reduce) {
      draw(0);
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        window.clearTimeout(resizeTimer);
      };
    }

    onScroll();
    raf = requestAnimationFrame(draw);
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (ents) => {
        for (const e of ents) {
          if (e.isIntersecting) {
            if (!raf) raf = requestAnimationFrame(draw);
          } else {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        }
      },
      { threshold: 0 }
    );
    io.observe(stage);
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        start = -1;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  const StoryCards = ({ overlay }: { overlay: boolean }) => (
    <div className={`hero-story ${overlay ? "is-animate" : "is-static"}`}>
      {!overlay && (
        <p className="hero-story__lead">
          気になるところを、順番にチェック。<span>そのお悩み、身体のクセかも？</span>
        </p>
      )}
      {concernDetails.map((c, i) => (
        <article key={c.key} className={`hero-story__card${overlay ? (step === i ? " is-active" : "") : " is-active"}`}>
          <p className="hero-story__idx">
            <span>0{i + 1}</span> / 03　<em>気になるところ</em>
          </p>
          <h3 className="hero-story__label">
            {c.label}
            <span className="hero-story__region">{c.region}</span>
          </h3>
          <p className="hero-story__body">{c.body}</p>
          <p className="hero-story__aula">
            <span className="hero-story__tag">Aula では</span>
            {c.aula}
          </p>
        </article>
      ))}
      <article className={`hero-story__card hero-story__card--sum${overlay ? (step === 3 ? " is-active" : "") : " is-active"}`}>
        <p className="hero-story__idx">
          <span>◎</span>　<em>だから</em>
        </p>
        <h3 className="hero-story__label hero-story__label--sum">
          自分のカラダは、<span>自分次第。</span>
        </h3>
        <p className="hero-story__body">クセを知って整えれば、体は変えられます。まずは体験から、一緒に見つけましょう。</p>
        <ul className="hero-story__goals">
          {concerns.goals.map((g) => (
            <li key={g}>{g}↑</li>
          ))}
        </ul>
        <div className="hero-story__cta">
          <Link href="/contact" className="hero-holo__btn hero-holo__btn--primary">
            体験を申し込む
          </Link>
          <a href={line.url} target="_blank" rel="noopener noreferrer" className="hero-holo__btn hero-holo__btn--line">
            LINEで相談
          </a>
        </div>
      </article>
    </div>
  );

  return (
    <section
      ref={secRef}
      className="hero-holo"
      style={{ height: animate ? "360vh" : undefined }}
      aria-label="studio Aula — 自分のカラダは自分次第。気になるところをスキャン"
    >
      <div ref={stageRef} className={`hero-holo__stage${animate ? " is-sticky" : ""}`}>
        {animate && (
          <div className="hero-holo__bar" aria-hidden>
            <span ref={barRef} />
          </div>
        )}

        <span className="hero-holo__scrim" aria-hidden />
        <canvas ref={canvasRef} className="hero-holo__canvas" aria-hidden />

        {!animate &&
          NODES.map((nd, i) => (
            <div
              key={nd.label}
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              className={`holo-node holo-node--${nd.side}`}
              aria-hidden
            >
              <span data-dot className="holo-node__dot" />
              <span className="holo-node__label">
                {nd.label}
                <span className="holo-node__sub">{nd.sub}</span>
              </span>
            </div>
          ))}

        <div className="hero-holo__copy">
          <div ref={copyRef} className="hero-holo__copy-inner">
            <p className="hero-holo__eyebrow">
              <span className="hero-holo__rec" aria-hidden />
              BODY&nbsp;&amp;&nbsp;MIND — Power&nbsp;UP
            </p>
            <h1 className="hero-holo__title">
              自分のカラダは
              <br />
              <span className="hero-holo__title-accent">自分次第</span>
            </h1>
            <p className="hero-holo__lead">
              その肩こり・腰痛・膝痛は、<b>身体のクセ</b>かもしれません。
              <br className="hidden sm:block" />
              自分の体のしくみを知り、育てるトレーニングを、studio&nbsp;Aula で。
            </p>
            <div className="hero-holo__cta">
              <Link href="/contact" className="hero-holo__btn hero-holo__btn--primary">
                体験を申し込む
              </Link>
              <a href={line.url} target="_blank" rel="noopener noreferrer" className="hero-holo__btn hero-holo__btn--line">
                LINEで相談
              </a>
            </div>
            <p className="hero-holo__readout" aria-hidden>
              <span>SCAN</span>
              <span>肩 37%</span>
              <span>腰 52%</span>
              <span>膝 41%</span>
              <span className="hero-holo__brand">studio Aula</span>
            </p>
          </div>
        </div>

        {animate && <StoryCards overlay />}

        {animate && (
          <div ref={hintRef} className="hero-holo__scroll" aria-hidden>
            <span>SCROLL で診断</span>
            <span className="hero-holo__scroll-line" />
          </div>
        )}
      </div>

      {!animate && <StoryCards overlay={false} />}
    </section>
  );
}
