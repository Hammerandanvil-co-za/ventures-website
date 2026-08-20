import type { ListRow10Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow10Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow10({ d, cids, styles }: { d: ListRow10Data; cids: string[]; styles: ListRow10Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
