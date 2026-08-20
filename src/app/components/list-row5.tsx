import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, cids, styles }: { d: ListRow5Data; cids: string[]; styles: ListRow5Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
