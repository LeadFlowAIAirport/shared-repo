"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Maximize, ExternalLink } from "lucide-react";

// Whether this browser can fullscreen an *element* (desktop, Android Chrome,
// iPad). iPhone Safari exposes neither method on elements, so we show the
// new-tab affordance instead. Read via useSyncExternalStore so the server and
// client agree on first paint (no hydration mismatch, no setState-in-effect).
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
 *    path works and is unchanged.
 *  - iPhone Safari has NO element Fullscreen API. Restyling the iframe (or its
 *    wrapper) to fill the viewport froze the embedded animation — a known iOS
 *    bug where WebKit stops painting an iframe once it, or an ancestor, becomes
 *    `position: fixed`. So instead we OPEN THE PLAYER ITSELF (the iframe's src)
 *    in a new tab: it runs as a normal full-window page with no iframe to
 *    freeze, and closing the tab returns to the site. The label reflects this.
 *
 * Only this file changes — the iframe and its wrapper are never restyled.
 */
export default function FullscreenButton({ targetId }: { targetId: string }) {
  const nativeFS = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const openStandalone = useCallback((el: HTMLIFrameElement) => {
    const url = el.src;
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null; // sever opener for safety (manual noopener)
    } else {
      // New tab blocked (rare from a direct tap) — navigate this tab instead.
      window.location.assign(url);
    }
  }, []);

  const handleClick = useCallback(() => {
    const el = document.getElementById(targetId) as
      | (HTMLIFrameElement & { webkitRequestFullscreen?: () => void })
      | null;
    if (!el) return;
    if (el.requestFullscreen) {
      // Desktop / Android / iPad: real fullscreen. Fall back if it's rejected.
      el.requestFullscreen().catch(() => openStandalone(el));
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else {
      // iPhone Safari: no element Fullscreen API — open the player full-window.
      openStandalone(el);
    }
  }, [targetId, openStandalone]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-mist/40 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
    >
      {nativeFS ? (
        <Maximize aria-hidden className="size-4 text-accent" />
      ) : (
        <ExternalLink aria-hidden className="size-4 text-accent" />
      )}
      {nativeFS ? "Fullscreen" : "Open full screen"}
    </button>
  );
}
