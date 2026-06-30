"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Maximize } from "lucide-react";

// Whether this browser can fullscreen an *element* (desktop, Android Chrome,
// iPad). iPhone Safari exposes neither method on elements, so we navigate to the
// player as a full-window page instead. Read via useSyncExternalStore so the
// server and client agree on first paint (no hydration mismatch, no
// setState-in-effect, which Next 16's lint rejects).
const subscribe = () => () => {};
const getServerSnapshot = () => true;
function getClientSnapshot() {
  return (
    typeof Element !== "undefined" &&
    ("requestFullscreen" in Element.prototype ||
      "webkitRequestFullscreen" in Element.prototype)
  );
}

/**
 * Fullscreen control for an embedded walkthrough whose own player has no
 * fullscreen button. Behaviour is chosen by feature detection (no UA sniffing):
 *
 *  - Browsers with the element Fullscreen API (desktop, Android Chrome, iPad) →
 *    native `requestFullscreen` on the iframe; the browser handles exit.
 *    Unchanged.
 *  - iPhone Safari has NO element Fullscreen API, and these players are HTML
 *    animations in an iframe (not real <video>), so neither native fullscreen
 *    path exists, and CSS "fixed" fullscreen froze the iframe (a known iOS bug).
 *    So on iPhone we navigate THIS TAB to the player itself (the iframe's src)
 *    as a full-window page — nothing about the iframe is restyled, so there is
 *    no freeze; the browser back button returns to the demo page.
 *
 * Only this file changes — the iframe and its wrapper are never restyled. For
 * true YouTube-style iPhone fullscreen, the walkthroughs would need to be real
 * MP4 <video> (via content.ts `videoSrc`) or a hosted video embed.
 */
export default function FullscreenButton({ targetId }: { targetId: string }) {
  const nativeFS = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const openFullWindow = useCallback((el: HTMLIFrameElement) => {
    const url = el.src;
    if (url) window.location.assign(url); // same tab; back button returns
  }, []);

  const handleClick = useCallback(() => {
    const el = document.getElementById(targetId) as
      | (HTMLIFrameElement & { webkitRequestFullscreen?: () => void })
      | null;
    if (!el) return;
    if (el.requestFullscreen) {
      // Desktop / Android / iPad: real fullscreen. Fall back if it's rejected.
      el.requestFullscreen().catch(() => openFullWindow(el));
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      // iPhone Safari: open the player as a full-window page in the same tab.
      openFullWindow(el);
    }
  }, [targetId, openFullWindow]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-mist/40 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
    >
      <Maximize aria-hidden className="size-4 text-accent" />
      {nativeFS ? "Fullscreen" : "Open full screen"}
    </button>
  );
}
