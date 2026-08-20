import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  id: string;
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className="flex relative z-10 items-center text-xs leading-0" id={d.id}>
      <a data-cid={cids[1]} className={cn("block relative z-10 mx-5 text-background text-sm leading-3.5 capitalize cursor-pointer", styles.className)} data-component="link" aria-current={d.ariacurrent} href={d.href}>
        <span data-cid={cids[2]} className={cn("inline relative z-10 after:content-[''] after:block after:absolute after:top-4.5 after:-bottom-[0.1875rem] after:inset-x-0 after:h-0 after:origin-[0px_0px] max-lg:after:w-full max-lg:after:top-auto max-lg:after:right-auto max-lg:after:h-auto max-lg:after:transform-[none] max-lg:after:origin-[initial]", styles.className2)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
