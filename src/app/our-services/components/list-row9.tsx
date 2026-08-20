import type { ListRow9Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow9Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d, cids, styles }: { d: ListRow9Data; cids: string[]; styles: ListRow9Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className="inline-block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
