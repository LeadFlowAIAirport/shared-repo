"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize, X } from "lucide-react";

/**
 * Site-level fullscreen control for an embedded walkthrough whose own player has
 * no fullscreen button. The bundled players expose play / CC / download but not
 * fullscreen, so this opens the target iframe full-screen.
 *
 * Two paths, chosen by feature detection (no UA sniffing):
 *  - Browsers with the element Fullscreen API (desktop, Android Chrome, iPad) →
 *    native `requestFullscreen` on the iframe; the browser handles exit.
 *  - iPhone Safari has NO element Fullscreen API (it can only fullscreen a
 *    <video>, and these players have none), so the native call is undefined and
 *    the button used to silently do nothing. We now fall back to a CSS
 *    "pseudo-fullscreen": the iframe is pinned to fill the viewport
 *    (position: fixed) with body scroll locked, plus a close (✕) button and Esc
 *    to exit. The original iframe styles and body scroll are restored on exit,
 *    so nothing else on the page is affected.
 */
export default function FullscreenButton({ targetId }: { targetId: string }) {
  const [pseudo, setPseudo] = useState(false);
  // Snapshot of exactly what we mutate, so exit can restore the page verbatim.
  const restore = useRef<{ iframeStyle: string; bodyOverflow: string } | null>(
    null,
  );

  const enterPseudo = useCallback((el: HTMLElement) => {
    restore.current = {
      iframeStyle: el.style.cssText,
      bodyOverflow: document.body.style.overflow,
    };
    // Pin the iframe to the full viewport. The section's ancestors settle to
    // `transform: none` once in view, so `fixed` anchors to the viewport and is
    // not clipped by the rounded frame. `100dvh` follows the mobile URL bar;
    // `100vh` is the fallback for browsers without dynamic viewport units.
    el.style.cssText =
      "position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;" +
      "max-width:none;margin:0;z-index:2147483646;";
    document.body.style.overflow = "hidden";
    setPseudo(true);
  }, []);

  const exitPseudo = useCallback(() => {
    const el = document.getElementById(targetId);
    if (restore.current) {
      if (el) el.style.cssText = restore.current.iframeStyle;
      document.body.style.overflow = restore.current.bodyOverflow;
      restore.current = null;
    }
    setPseudo(false);
  }, [targetId]);

  const handleClick = useCallback(() => {
    const el = document.getElementById(targetId) as
      | (HTMLElement & { webkitRequestFullscreen?: () => void })
      | null;
    if (!el) return;
    if (el.requestFullscreen) {
      // Desktop / Android / iPad: real fullscreen. Fall back if it's rejected.
      el.requestFullscreen().catch(() => enterPseudo(el));
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      // iPhone Safari: no element Fullscreen API — use the CSS fallback.
      enterPseudo(el);
    }
  }, [targetId, enterPseudo]);

  // While pseudo-fullscreen is active, Esc exits it.
  useEffect(() => {
    if (!pseudo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exitPseudo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pseudo, exitPseudo]);

  // Safety net: never leave body scroll locked if we unmount mid-fullscreen
  // (e.g. client-side navigation while expanded).
  useEffect(() => {
    return () => {
      if (restore.current) {
        document.body.style.overflow = restore.current.bodyOverflow;
      }
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-mist/40 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        <Maximize aria-hidden className="size-4 text-accent" />
        Fullscreen
      </button>

      {pseudo &&
        createPortal(
          <button
            type="button"
            onClick={exitPseudo}
            aria-label="Exit fullscreen"
            style={{
              position: "fixed",
              top: "calc(env(safe-area-inset-top, 0px) + 12px)",
              right: "calc(env(safe-area-inset-right, 0px) + 12px)",
              zIndex: 2147483647,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(6,16,11,0.7)",
              color: "#fff",
              WebkitBackdropFilter: "blur(6px)",
              backdropFilter: "blur(6px)",
            }}
          >
            <X aria-hidden size={22} />
          </button>,
          document.body,
        )}
    </>
  );
}
