"use client";

import { useState } from "react";
import { faq } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line overflow-hidden rounded-leaf border border-line bg-card">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-euca-50 md:px-8"
              aria-expanded={isOpen}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-euca-100 text-sm font-bold text-euca-700">
                Q
              </span>
              <span className="flex-1 text-lg font-bold text-ink">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-euca-700 text-white transition ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pl-[4.5rem] leading-relaxed text-sub md:px-8 md:pl-[5.5rem]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
