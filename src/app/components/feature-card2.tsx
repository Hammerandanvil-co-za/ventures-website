import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, cids, styles }: { d: FeatureCard2Data; cids: string[]; styles: FeatureCard2Styles }) {
  return (
    <div data-cid={cids[0]} data-ditto-animate="grow-in" className={cn("w-[17.525rem] h-[13.3125rem] block relative px-[0.7rem] [background-position:50%_50%] max-md:w-[336.5px] max-md:px-[0.2125rem] md:max-lg:w-[344.5px] md:max-lg:px-[6.9px] 2xl:w-[336.5px] 2xl:h-[11.3125rem] 2xl:px-[13.5px] after:content-[''] after:block after:w-full after:h-0", styles.className)}>
      <div data-cid={cids[1]} className="block relative">
        <div data-cid={cids[2]} className="block">
          <div data-cid={cids[3]} className="block mb-[0.9375rem] pr-5">
            <div data-cid={cids[4]} className="block">
              <h5 data-cid={cids[5]} className="block [font-family:'Cantata_One'] text-xl leading-7" data-component="heading">
                {d.title}
              </h5>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <p data-cid={cids[6]} className={cn("block mb-2.5 text-left", styles.className2)}>
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
