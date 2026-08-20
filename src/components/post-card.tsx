import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  const href = `/${post.year}/${post.month}/${post.day}/${post.slug}/`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col overflow-hidden rounded-[5px] bg-background shadow-[var(--color-010)_0px_10px_30px_0px]">
      {post.image && (
        <Link href={href} className="relative block aspect-[3/2] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="h-full w-full object-cover" />
        </Link>
      )}
      <div className="flex grow flex-col p-[1.6rem]">
        <span className="mb-2 text-sm font-semibold text-primary">{post.categories.join(" · ")}</span>
        <h3 className="mb-2 [font-family:'Cantata_One'] text-[1.375rem] leading-7">
          <Link href={href} className="hover:opacity-80">
            {post.title}
          </Link>
        </h3>
        <p className="grow text-color-006 text-sm leading-6">{post.excerpt}</p>
        <span className="mt-4 text-[0.8125rem] text-muted-foreground">{formattedDate}</span>
      </div>
    </article>
  );
}
