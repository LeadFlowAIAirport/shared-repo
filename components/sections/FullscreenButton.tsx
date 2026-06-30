"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
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
 *    native `requestFullscreen` on the iframe; the browser handles exit. This
 *    path — and everything below — is UNCHANGED for them; the iPhone-only memory
 *    handling never runs.
 *  - iPhone Safari has NO element Fullscreen API, and these players are HTML
 *    animations in an iframe (not real <video>), so we navigate THIS TAB to the
 *    player itself (the iframe's src) as a full-window page; the back button
 *    returns to the demo page.
 *
 * iPhone memory safeguard: each player is a ~1.2MB self-unpacking animation and
 * iOS Safari's per-tab memory budget is small. To avoid two of them being
 * resident at once — the demo page kept alive in the back-forward cache with a
 * live animation while the full-window player loads, which can repeatedly OOM
 * the tab ("A problem repeatedly occurred") — we blank the iframe (about:blank)
 * before navigating away / when the page is hidden, and reload it on return.
 * iPhone-only; the demo file, layout, copy, and other platforms are untouched.
 */
export default function FullscreenButton({ targetId }: { targetId: string }) {
  const nativeFS = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  // Remembers the real player URL while the iframe is blanked, so we can reload it.
  const savedSrc = useRef("");

  const getIframe = useCallback(
    () => document.getElementById(targetId) as HTMLIFrameElement | null,
    [targetId],
  );

  // Free the heavy animation: remember its URL, then point the iframe at about:blank.
  const blankIframe = useCallback(() => {
    const el = getIframe();
    if (!el) return;
    if (el.src && el.src !== "about:blank") savedSrc.current = el.src;
    if (el.src !== "about:blank") el.src = "about:blank";
  }, [getIframe]);

  // Reload the player after returning (e.g. via back button / bfcache restore).
  const restoreIframe = useCallback(() => {
    const el = getIframe();
    if (el && savedSrc.current && el.src !== savedSrc.current) {
      el.src = savedSrc.current;
    }
  }, [getIframe]);

  const handleClick = useCallback(() => {
    const el = getIframe() as
      | (HTMLIFrameElement & { webkitRequestFullscreen?: () => void })
      | null;
    if (!el) return;
    if (el.requestFullscreen) {
      // Desktop / Android / iPad: real fullscreen. Fall back if it's rejected.
      el.requestFullscreen().catch(() => {
        const url = el.src;
        if (url) window.location.assign(url);
      });
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      // iPhone Safari: open the player full-window in the same tab. Capture its
      // URL, free the iframe so the demo page isn't held in bfcache with a live
      // ~1.2MB animation, then navigate. (Back returns and the iframe reloads.)
      const url = el.src;
      blankIframe();
      if (url) window.location.assign(url);
    }
  }, [getIframe, blankIframe]);

  // iPhone only: free the iframe whenever the demo page is hidden / cached, and
  // reload it on return. Desktop / Android / iPad are left exactly as before.
  useEffect(() => {
    if (nativeFS) return;
    const onPageHide = () => blankIframe();
    const onPageShow = () => restoreIframe();
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [nativeFS, blankIframe, restoreIframe]);

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
