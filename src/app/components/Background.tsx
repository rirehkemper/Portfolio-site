"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Background() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    el.id = "__background-root";
    // ensure the host fills the viewport and sits below the navbar
    el.style.position = "fixed";
    el.style.inset = "0";
  // keep the background behind the main UI (nav should sit above)
  el.style.zIndex = "0";
    el.style.pointerEvents = "none";
    document.body.appendChild(el);
    setHost(el);
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <>
      <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 matrix-grid pointer-events-none" />
    </>,
    host
  );
}
