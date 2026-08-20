import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <>
      <div className="h-33 block bg-background max-lg:h-23.5" id="header-space" />
      <div className="h-33 block fixed inset-x-0 z-9998 min-w-0 bg-surface-4 max-lg:h-23.5 max-lg:py-3" id="header-outer">
        <header className="h-full block relative z-9998" id="top">
          <div className="h-full block relative max-w-375 px-22.5 max-lg:max-w-[88%] max-md:mx-[22.5px] max-lg:px-0 md:max-lg:mx-[2.875rem] 2xl:mx-52.5">
            <div className="h-full flex items-center relative max-lg:justify-between">
              <Link
                href="/"
                className="block relative my-4 self-center text-primary [font-family:'Open_Sans'] text-[1.375rem] font-semibold leading-5.5 tracking-[-1px] max-lg:my-0"
                id="logo"
              >
                <img
                  className="w-25 h-25 block max-lg:w-17.5 max-lg:h-17.5"
                  alt="Hammer & Anvil Ventures"
                  height={300}
                  width={300}
                  src="/assets/cloned/images/25371d8dd0a7.png"
                />
              </Link>

              <nav className="flex grow justify-center max-lg:hidden" aria-label="Main Menu">
                <ul className="flex items-center gap-9 [list-style-type:none]">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={current === item.href ? "page" : undefined}
                        className="text-primary text-sm font-semibold uppercase tracking-wide hover:opacity-80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                className="hidden max-lg:block text-primary cursor-pointer"
                aria-label="Navigation Menu"
                href="#slide-out-widget-area"
              >
                <span className="block w-7 h-0.5 bg-primary mb-1.5" />
                <span className="block w-7 h-0.5 bg-primary" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
