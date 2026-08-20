import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";
import { getRecentPosts } from "@/lib/blog";

const CATEGORIES = [
  { href: "https://www.hammerandanvil.co.za/category/energy/", label: "Energy" },
  { href: "https://www.hammerandanvil.co.za/category/renewable-energy/", label: "Renewable Energy" },
  { href: "https://www.hammerandanvil.co.za/category/uncategorized/", label: "Uncategorized" },
];

export default function SiteFooter() {
  const recentPosts = getRecentPosts(4);

  return (
    <div className="block relative z-10 text-muted-foreground bg-surface-3" id="footer-outer">
      <div id="footer-widgets">
        <div className="block relative max-w-375 px-22.5 max-lg:max-w-[88%] max-md:mx-[22.5px] max-lg:px-0 md:max-lg:mx-[2.875rem] 2xl:mx-52.5">
          <div className="grid gap-10 py-[4.6875rem] max-lg:py-[3.4375rem] sm:grid-cols-2 lg:grid-cols-4">
            <div id="text-1">
              <p>
                Copyright © {new Date().getFullYear()} Hammer and Anvil Ventures
                <br />
                All rights reserved.
              </p>
            </div>

            <div id="nav_menu-1">
              <h4 className="mb-5 text-color-004 [font-family:'Cantata_One'] capitalize">Discover</h4>
              <ul className="[list-style-type:none]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} className="py-1">
                    <Link href={item.href} className="hover:text-color-004">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div id="categories-1">
              <h4 className="mb-5 text-color-004 [font-family:'Cantata_One'] capitalize">Categories</h4>
              <ul className="[list-style-type:none]">
                {CATEGORIES.map((cat) => (
                  <li key={cat.href} className="py-1">
                    <a href={cat.href} className="hover:text-color-004">
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="recent-posts-1">
              <h4 className="mb-5 text-color-004 [font-family:'Cantata_One'] capitalize">Recent Posts</h4>
              <ul className="[list-style-type:none]">
                {recentPosts.map((post) => (
                  <li key={post.slug} className="py-1">
                    <Link href={`/${post.year}/${post.month}/${post.day}/${post.slug}/`} className="hover:text-color-004">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
