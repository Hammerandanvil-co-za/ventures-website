import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PostCard from "@/components/post-card";
import BlogPagination, { POSTS_PER_PAGE } from "@/components/blog-pagination";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog – Hammer & Anvil Ventures",
};

export function generateStaticParams() {
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export default async function BlogPagePage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  if (!Number.isInteger(page) || page < 2 || page > totalPages) {
    notFound();
  }

  const pagePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteHeader current="/blog" />
      <main className="mx-auto w-full max-w-375 grow px-22.5 py-[4.8rem] max-lg:max-w-[88%] max-lg:px-0">
        <h1 className="mb-14 text-center [font-family:'Cantata_One'] text-[2.8125rem] leading-[3.5rem] max-md:text-[2.4375rem]">
          Blog
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <BlogPagination current={page} total={totalPages} />
      </main>
      <SiteFooter />
    </div>
  );
}
