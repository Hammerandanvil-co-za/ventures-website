"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-ditto-animate]";
const MENU_TOGGLE_SELECTOR = 'a[href="#slide-out-widget-area"]';
const MENU_CLOSE_SELECTOR = "[data-ditto-menu-close]";
const MENU_OPEN_CLASS = "ditto-menu-open";

/**
 * Restores the scroll/interaction motion that ditto.site's static capture
 * couldn't replay (see AGENTS.md): scroll-triggered reveal animations
 * (mirroring the live site's Waypoints + anime.js reveal system) and the
 * off-canvas mobile menu toggle.
 */
export default function DittoMotion() {
  const pathname = usePathname();

  // Re-scans on every route change: the App Router keeps this component's
  // layout mounted across navigation, so a []-only effect would only ever
  // observe the first page's elements and leave every later page's reveal
  // elements stuck at opacity:0 forever.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    let observer: IntersectionObserver | undefined;
    if (reducedMotion) {
      revealEls.forEach((el) => el.classList.add("ditto-in-view"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("ditto-in-view");
              observer!.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );
      revealEls.forEach((el) => observer!.observe(el));
    }

    return () => observer?.disconnect();
  }, [pathname]);

  useEffect(() => {
    const closeMenu = () => document.documentElement.classList.remove(MENU_OPEN_CLASS);
    const onToggleClick = (e: Event) => {
      e.preventDefault();
      document.documentElement.classList.toggle(MENU_OPEN_CLASS);
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const onOverlayClick = (e: Event) => {
      if ((e.target as HTMLElement).id === "slide-out-widget-area") closeMenu();
    };

    const toggles = document.querySelectorAll<HTMLAnchorElement>(MENU_TOGGLE_SELECTOR);
    toggles.forEach((el) => el.addEventListener("click", onToggleClick));
    const closeButtons = document.querySelectorAll<HTMLAnchorElement>(MENU_CLOSE_SELECTOR);
    const onCloseClick = (e: Event) => {
      e.preventDefault();
      closeMenu();
    };
    closeButtons.forEach((el) => el.addEventListener("click", onCloseClick));
    const panel = document.getElementById("slide-out-widget-area");
    panel?.addEventListener("click", onOverlayClick);
    document.addEventListener("keydown", onKeydown);

    return () => {
      toggles.forEach((el) => el.removeEventListener("click", onToggleClick));
      closeButtons.forEach((el) => el.removeEventListener("click", onCloseClick));
      panel?.removeEventListener("click", onOverlayClick);
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return null;
}
