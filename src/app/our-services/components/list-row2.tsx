import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow2({ d, cids, styles }: { d: ListRow2Data; cids: string[]; styles: ListRow2Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item relative mb-2.5 pl-7.5 before:content-['.'] before:block before:absolute before:top-[0.5625rem] before:right-[58.175rem] before:left-0 before:w-1.5 before:h-0 before:text-foreground before:text-[1.625rem] before:leading-0 max-md:before:right-[18.725rem] md:max-lg:before:right-[39.05rem] 2xl:before:right-[1120.5px]", styles.className)}>
      <p data-cid={cids[1]} className={cn("block", styles.className2)}>
        <strong data-cid={cids[2]} className="inline font-semibold">
          {d.description}
        </strong>
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
