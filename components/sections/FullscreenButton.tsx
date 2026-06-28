"use client";

import { Maximize } from "lucide-react";

/**
 * Site-level fullscreen control for an embedded walkthrough whose own player has
 * no fullscreen button. The bundled Full Growth System player exposes play / CC /
 * download but not fullscreen, so this requests the browser Fullscreen API on the
 * target iframe, letting users watch the explainer full-screen. No-op (caught) if
 * the browser blocks the request; nothing else on the page is affected.
 */
export default function FullscreenButton({ targetId }: { targetId: string }) {
  function enterFullscreen() {
    const el = document.getElementById(targetId) as
      | (HTMLElement & { webkitRequestFullscreen?: () => void })
      | null;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  }

  return (
    <button
      type="button"
      onClick={enterFullscreen}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-mist/40 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
    >
      <Maximize aria-hidden className="size-4 text-accent" />
      Fullscreen
    </button>
  );
}
