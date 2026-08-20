import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  label: string;
  title: string;
  text: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("w-[17.525rem] block relative px-[0.7rem] [background-position:50%_50%] max-md:w-[336.5px] max-md:mb-[1.5625rem] max-md:px-[0.2125rem] md:max-lg:w-[344.5px] md:max-lg:mb-3.5 md:max-lg:px-[6.9px] 2xl:w-[336.5px] 2xl:px-[13.5px] after:content-[''] after:block after:w-full after:h-0", styles.className)}>
      <div data-cid={cids[1]} className={cn("block relative", styles.className2)}>
        <div data-cid={cids[2]} className={cn("block", styles.className3)}>
          <div data-cid={cids[3]} className={cn("block mt-[0.4375rem] pb-[0.4375rem]", styles.className4)}>
            <img data-cid={cids[4]} className="w-37.5 h-37.5 inline max-w-full mb-[0.9375rem] overflow-clip" data-component="image" alt="" src="/assets/cloned/images/611054b88bb5.png" title={d.label} />
            <h4 data-cid={cids[5]} className="block [font-family:'Cantata_One'] text-[1.5rem] max-md:text-[1.375rem] max-md:leading-[1.8125rem]" data-component="heading">
              {d.title}
            </h4>
            <div data-cid={cids[6]} className="block">
              {d.text}
            </div>
            <p data-cid={cids[7]} className="border-t border-solid border-t-surface-2 border-b border-b-surface-2 block my-[0.9375rem] py-[0.9375rem]">
              {d.description}
            </p>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
