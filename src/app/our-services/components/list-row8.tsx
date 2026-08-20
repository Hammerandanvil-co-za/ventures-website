import type { ListRow8Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow8({ d, cids, styles }: { d: ListRow8Data; cids: string[]; styles: ListRow8Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className="block cursor-pointer" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
