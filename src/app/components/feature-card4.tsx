import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d, cids, styles }: { d: FeatureCard4Data; cids: string[]; styles: FeatureCard4Styles }) {
  return (
    <div data-cid={cids[0]} data-ditto-animate="grow-in" className={cn("w-[17rem] h-[11.0625rem] block relative px-[10.9px] [background-position:50%_50%] max-md:w-[20.3125rem] max-md:px-[0.2rem] md:max-lg:w-[335.3px] md:max-lg:px-[6.7px] 2xl:w-[20.4375rem] 2xl:h-[9.3125rem] 2xl:px-[0.8125rem] after:content-[''] after:block after:w-full after:h-0", styles.className)}>
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
