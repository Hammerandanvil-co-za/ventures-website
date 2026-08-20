import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN, NAV_ITEMS } from "../lib/site";
import DittoMotion from "./ditto/motion";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Hammer & Anvil Ventures – Empowering businesses, driving excellence.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/53406e2fc440.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/9b9fcd9e96e4.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/819dfc901952.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-ZA"}>
      <body className="cn0" data-cid="n0">
        <DittoMotion />
        {children}
        <a className="w-0 h-0 block fixed top-100 left-345 z-10000 opacity-0 min-w-0 text-primary cursor-pointer before:content-[''] before:block before:absolute before:top-0 before:-right-[1.4375rem] before:-bottom-[1.4375rem] before:left-0 before:w-11.5 before:h-11.5 before:-mt-[1.4375rem] before:-ml-[1.4375rem] before:bg-background before:shadow-[var(--color-014)_0px_16px_44px_0px] before:transform-[matrix(0,0,0,0,0,0)] before:origin-[23px_23px] before:rounded-tl-[50%] max-lg:before:bg-color-005 max-lg:before:shadow-[initial]" data-cid="Ln603" data-ditto-menu-close href="#">
          <span className="w-px h-px block absolute -m-px overflow-hidden [clip-path:inset(50%)]" data-cid="Ln604">
            Close Menu
          </span>
          {" "}
          <span className="w-5 h-5 block absolute overflow-hidden transform-[matrix(1,0,0,1,-10,-10)]" data-cid="Ln605">
            {" "}
            <span className="w-0.5 h-5 block absolute top-0 left-[0.5625rem] rounded-[5px] bg-primary max-lg:bg-background" data-cid="Ln606" />
            {" "}
            <span className="w-0.5 h-5 block absolute top-0 left-[0.5625rem] rounded-[5px] bg-primary max-lg:bg-background" data-cid="Ln607" />
            {" "}
          </span>
          {" "}
        </a>
        <div id="slide-out-widget-area" role="dialog" aria-label="Navigation Menu">
          <nav aria-label="Mobile Menu">
            <ul className="off-canvas-menu-container">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </body>
    </html>
  );
}
