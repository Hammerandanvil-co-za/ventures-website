import Link from "next/link";

export const POSTS_PER_PAGE = 8;

export default function BlogPagination({ current, total }: { current: number; total: number }) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Pagination Navigation" id="pagination">
      <ul className="flex items-center gap-2 [list-style-type:none]">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={p === 1 ? "/blog" : `/blog/page/${p}`}
              aria-current={p === current ? "page" : undefined}
              className={
                p === current
                  ? "inline-block rounded-[200px] bg-primary px-[0.8125rem] py-[0.6875rem] text-xs font-bold text-background"
                  : "inline-block rounded-[200px] px-[0.8125rem] py-[0.6875rem] text-xs font-bold text-primary hover:bg-surface-3"
              }
            >
              {p}
            </Link>
          </li>
        ))}
        {current < total && (
          <li>
            <Link
              href={`/blog/page/${current + 1}`}
              className="inline-block rounded-[200px] px-[0.8125rem] py-[0.6875rem] text-xs font-bold text-primary hover:bg-surface-3"
            >
              Next »
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
