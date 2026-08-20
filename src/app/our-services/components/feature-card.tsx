import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  id: string;
  href: string;
  title: string;
  href2: string;
  title2: string;
  href3: string;
  title3: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className="block relative before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0" id={d.id}>
      <div data-cid={cids[1]} className="h-full block absolute top-0 inset-x-0 z-2 overflow-hidden">
        <div data-cid={cids[2]} className="h-[3.6rem] block absolute bottom-0 inset-x-0 z-1 bg-cover max-md:h-[134.5px] md:max-lg:h-[9.875rem] 2xl:h-[4.4rem]" />
        {" "}
      </div>
      <div data-cid={cids[3]} className="flex relative z-10 flex-wrap text-center after:content-[''] after:block after:w-0 after:h-0">
        <div data-cid={cids[4]} className="w-[341.3px] block relative bg-cover [background-position:50%_50%] max-md:w-75 md:max-lg:w-[38.4rem] 2xl:w-128 after:content-[''] after:block after:w-full after:h-0">
          <div data-cid={cids[5]} className="h-full block relative p-[0.8rem] max-md:p-1 md:max-lg:p-[7.7px] 2xl:p-[1.2rem]">
            <div data-cid={cids[6]} className="h-full block">
              <div data-cid={cids[7]} className="h-6 inline-block max-lg:block max-lg:h-auto">
                <h6 data-cid={cids[8]} className={cn("block [font-family:'Cantata_One'] leading-6", styles.className)} data-component="heading">
                  <span data-cid={cids[9]} className="inline relative rounded-[200px]">
                    <a data-cid={cids[10]} className={cn("inline-block relative cursor-pointer whitespace-nowrap after:content-[''] after:block after:absolute after:top-5 after:bottom-0 after:inset-x-0 after:z-1 after:h-0.5 after:opacity-80", styles.className2)} data-component="button" href={d.href} role="button">
                      {d.title}
                    </a>
                  </span>
                </h6>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div data-cid={cids[11]} className="w-[341.3px] block relative bg-cover [background-position:50%_50%] max-md:w-75 md:max-lg:w-[38.4rem] 2xl:w-128 after:content-[''] after:block after:w-full after:h-0">
          <div data-cid={cids[12]} className="block relative p-[0.8rem] max-md:p-1 md:max-lg:p-[7.7px] 2xl:p-[1.2rem]">
            <div data-cid={cids[13]} className="block">
              <div data-cid={cids[14]} className="block">
                <h6 data-cid={cids[15]} className={cn("block [font-family:'Cantata_One'] leading-6", styles.className3)} data-component="heading">
                  <span data-cid={cids[16]} className="inline relative rounded-[200px]">
                    <a data-cid={cids[17]} className={cn("inline-block relative cursor-pointer whitespace-nowrap after:content-[''] after:block after:absolute after:top-5 after:bottom-0 after:inset-x-0 after:z-1 after:h-0.5 after:opacity-80", styles.className4)} data-component="button" href={d.href2} role="button">
                      {d.title2}
                    </a>
                  </span>
                </h6>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div data-cid={cids[18]} className="w-[341.3px] block relative bg-cover [background-position:50%_50%] max-md:w-75 md:max-lg:w-[38.4rem] 2xl:w-128 after:content-[''] after:block after:w-full after:h-0">
          <div data-cid={cids[19]} className="block relative p-[0.8rem] max-md:p-1 md:max-lg:p-[7.7px] 2xl:p-[1.2rem]">
            <div data-cid={cids[20]} className="block">
              <div data-cid={cids[21]} className="block">
                <h6 data-cid={cids[22]} className={cn("block [font-family:'Cantata_One'] leading-6", styles.className5)} data-component="heading">
                  <span data-cid={cids[23]} className="inline relative rounded-[200px]">
                    <a data-cid={cids[24]} className={cn("inline-block relative cursor-pointer after:content-[''] after:block after:absolute after:top-5 after:bottom-0 after:inset-x-0 after:z-1 after:h-0.5 after:opacity-80", styles.className6)} data-component="button" href={d.href3} role="button">
                      {d.title3}
                    </a>
                  </span>
                </h6>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
