import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getAllPosts, getPostByParts } from "@/lib/blog";

type Params = { year: string; month: string; day: string; slug: string };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    year: post.year,
    month: post.month,
    day: post.day,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { year, month, day, slug } = await params;
  const post = getPostByParts(year, month, day, slug);
  if (!post) return {};
  return { title: `${post.title} – Hammer & Anvil Ventures`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { year, month, day, slug } = await params;
  const post = getPostByParts(year, month, day, slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-375 grow px-22.5 py-[4.8rem] max-lg:max-w-[88%] max-lg:px-0">
        <article className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-primary">{post.categories.join(" · ")}</p>
          <h1 className="mb-3 [font-family:'Cantata_One'] text-[2.4375rem] leading-[3rem] max-md:text-[1.9rem] max-md:leading-[2.4rem]">
            {post.title}
          </h1>
          <p className="mb-8 text-[0.8125rem] text-muted-foreground">
            By Hammer and Anvil &middot; {formattedDate}
          </p>

          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt=""
              className="mb-10 aspect-[16/9] w-full rounded-[5px] object-cover"
            />
          )}

          <div className="prose max-w-none text-color-006 prose-headings:[font-family:'Cantata_One'] prose-headings:text-foreground prose-a:text-primary">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
