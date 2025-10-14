"use client";

import { useEffect, useState } from "react";

export default function Inspector() {
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    function inspect() {
      const host = document.getElementById("__background-root");
      if (!host) {
        setInfo("no-portal-host");
        console.log("Inspector: no portal host found");
        return;
      }
      const children = host.querySelectorAll("div");
      const hostRect = host.getBoundingClientRect();
      const overlay = children[1] ?? children[0] ?? null;
      const base = children[0] ?? null;
      const overlayInfo: any = {
        hostExists: !!host,
        hostBounds: hostRect.toJSON ? hostRect.toJSON() : hostRect,
        childCount: children.length,
        basePresent: !!base,
        overlayPresent: !!overlay,
      };
      if (overlay) {
        const cs = getComputedStyle(overlay);
        const rect = overlay.getBoundingClientRect();
        overlayInfo.computed = {
          display: cs.display,
          background: cs.background || cs.backgroundColor,
          opacity: cs.opacity,
          zIndex: cs.zIndex,
          mixBlendMode: cs.mixBlendMode,
          pointerEvents: cs.pointerEvents,
          clientWidth: overlay.clientWidth,
          clientHeight: overlay.clientHeight,
          boundingRect: rect && rect.toJSON ? rect.toJSON() : rect,
        };
      }
      console.log("Inspector result:", overlayInfo);
      setInfo(JSON.stringify(overlayInfo, null, 2));
    }

    // run after a short delay to let client components mount
    const t = setTimeout(inspect, 200);
    // also provide a key to re-run on click
    return () => clearTimeout(t);
  }, []);

  if (!info) return null;

  return (
    <div style={{position: 'fixed', right: 8, bottom: 8, zIndex: 9999999, background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: 12, padding: 8, borderRadius: 6, maxWidth: 420, whiteSpace: 'pre-wrap'}}>
      <strong>Background inspector</strong>
      <pre style={{marginTop: 6, maxHeight: 280, overflow: 'auto'}}>{info}</pre>
    </div>
  );
}
