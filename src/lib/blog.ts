import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  year: string;
  month: string;
  day: string;
  categories: string[];
  excerpt: string;
  image?: string;
  content: string;
};

let cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cache) return cache;
  const files = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR) : [];
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        year: String(data.year),
        month: String(data.month),
        day: String(data.day),
        categories: data.categories ?? [],
        excerpt: data.excerpt ?? "",
        image: data.image,
        content,
      } satisfies BlogPost;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getPostByParts(year: string, month: string, day: string, slug: string): BlogPost | undefined {
  return getAllPosts().find(
    (p) => p.year === year && p.month === month && p.day === day && p.slug === slug
  );
}

export function getRecentPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}
