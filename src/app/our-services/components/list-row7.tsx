import type { ListRow7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow7Data = {
  text: string;
};
/** A list row. */
export default function ListRow7({ d, cids, styles }: { d: ListRow7Data; cids: string[]; styles: ListRow7Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item relative mb-2.5 pl-7.5 before:content-['.'] before:block before:absolute before:top-[0.5625rem] before:right-[58.175rem] before:bottom-[0.9375rem] before:left-0 before:w-1.5 before:h-0 before:text-foreground before:text-[1.625rem] before:leading-0 max-md:before:right-[18.725rem] md:max-lg:before:right-[39.05rem] 2xl:before:right-[1120.5px]", styles.className)}>
      {d.text}
    </li>
  );
}
