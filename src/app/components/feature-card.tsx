import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
  title2: string;
  title3: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className="w-[15.1125rem] block relative [background-position:50%_50%] max-md:w-[329.9px] md:max-lg:w-[675.5px] 2xl:w-[18.1375rem] after:content-[''] after:block after:w-full after:h-0">
      <div data-cid={cids[1]} className={cn("block relative p-[0.6875rem] max-md:p-[11.3px] md:max-lg:p-4.5 2xl:p-[12.5px]", styles.className)}>
        <div data-cid={cids[2]} className="block">
          <div data-cid={cids[3]} data-ditto-animate="grow-in" className={cn("block relative mb-8 p-[2.0625rem] rounded-[10px] overflow-hidden text-background max-md:p-[2.875rem] md:max-lg:h-[18.2375rem] md:max-lg:p-24 2xl:h-[13.225rem] 2xl:p-10 after:content-['_'] after:hidden after:absolute after:bottom-0 after:left-0 after:z-5 after:w-full after:h-1.5 after:text-background after:text-base after:leading-8 after:bg-primary", styles.className2)}>
            <div data-cid={cids[4]} className={cn("w-[220.3px] h-full block absolute top-0 left-0 z-1 bg-cover [background-position:50%_50%] max-md:w-[19.25rem] md:max-lg:w-[40.05rem] 2xl:w-[265.9px] before:content-[''] before:block before:absolute before:inset-0 before:z-1 before:bg-background before:opacity-0 after:content-['_'] after:block after:absolute after:inset-0 after:text-background after:text-base after:leading-8", styles.className3)} />
            {" "}
            <div data-cid={cids[5]} className="block relative z-10 text-left">
              <i data-cid={cids[6]} className={cn("h-10 block relative -top-0.5 bottom-0.5 max-w-full mb-5 align-middle [font-family:FontAwesome] text-[2.5rem] leading-10 [word-spacing:1px] before:text-background before:text-[2.5rem] before:leading-10 before:text-left", styles.className4)} />
              {" "}
              <h4 data-cid={cids[7]} className="block mb-2 [font-family:'Cantata_One'] text-[1.5rem] max-md:text-[1.375rem] max-md:leading-[1.8125rem]" data-component="heading">
                {d.title}
              </h4>
              {" "}
            </div>
            {" "}
            <a data-cid={cids[8]} className="w-[13.6125rem] h-full block absolute top-px left-px z-100 text-primary cursor-pointer max-md:w-[19.0875rem] md:max-lg:w-[637.5px] 2xl:w-[263.3px]" data-component="link" href="/our-services" />
            {" "}
          </div>
          <div data-cid={cids[9]} data-ditto-animate="grow-in" className={cn("block relative mb-8 p-[2.0625rem] rounded-[10px] overflow-hidden text-background max-md:p-[2.875rem] md:max-lg:p-24 2xl:p-10 after:content-['_'] after:hidden after:absolute after:bottom-0 after:left-0 after:z-5 after:w-full after:h-1.5 after:text-background after:text-base after:leading-8 after:bg-primary", styles.className5)}>
            <div data-cid={cids[10]} className={cn("w-[220.3px] h-full block absolute top-0 left-0 z-1 bg-cover [background-position:50%_50%] max-md:w-[19.25rem] md:max-lg:w-[40.05rem] 2xl:w-[265.9px] before:content-[''] before:block before:absolute before:inset-0 before:z-1 before:bg-background before:opacity-0 after:content-['_'] after:block after:absolute after:inset-0 after:text-background after:text-base after:leading-8", styles.className6)} />
            {" "}
            <div data-cid={cids[11]} className="block relative z-10 text-left">
              <i data-cid={cids[12]} className={cn("h-10 block relative -top-0.5 bottom-0.5 max-w-full mb-5 align-middle [font-family:FontAwesome] text-[2.5rem] leading-10 [word-spacing:1px] before:text-background before:text-[2.5rem] before:leading-10 before:text-left", styles.className7)} />
              {" "}
              <h4 data-cid={cids[13]} className="block mb-2 [font-family:'Cantata_One'] text-[1.5rem] max-md:text-[1.375rem] max-md:leading-[1.8125rem]" data-component="heading">
                {d.title2}
              </h4>
              {" "}
            </div>
            {" "}
            <a data-cid={cids[14]} className="w-[13.6125rem] h-full block absolute top-px left-px z-100 text-primary cursor-pointer max-md:w-[19.0875rem] md:max-lg:w-[637.5px] 2xl:w-[263.3px]" data-component="link" href="/our-services" />
            {" "}
          </div>
          <div data-cid={cids[15]} data-ditto-animate="grow-in" className={cn("block relative mb-8 p-[2.0625rem] rounded-[10px] overflow-hidden text-background max-md:p-[2.875rem] md:max-lg:p-24 2xl:p-10 after:content-['_'] after:hidden after:absolute after:bottom-0 after:left-0 after:z-5 after:w-full after:h-1.5 after:text-background after:text-base after:leading-8 after:bg-primary", styles.className8)}>
            <div data-cid={cids[16]} className={cn("w-[220.3px] h-full block absolute top-0 left-0 z-1 bg-cover [background-position:50%_50%] max-md:w-[19.25rem] md:max-lg:w-[40.05rem] 2xl:w-[265.9px] before:content-[''] before:block before:absolute before:inset-0 before:z-1 before:bg-background before:opacity-0 after:content-['_'] after:block after:absolute after:inset-0 after:text-background after:text-base after:leading-8", styles.className9)} />
            {" "}
            <div data-cid={cids[17]} className="block relative z-10 text-left">
              <i data-cid={cids[18]} className={cn("h-10 block relative -top-0.5 bottom-0.5 max-w-full mb-5 align-middle [font-family:FontAwesome] text-[2.5rem] leading-10 [word-spacing:1px] before:text-background before:text-[2.5rem] before:leading-10 before:text-left", styles.className10)} />
              {" "}
              <h4 data-cid={cids[19]} className="block mb-2 [font-family:'Cantata_One'] text-[1.5rem] max-md:text-[1.375rem] max-md:leading-[1.8125rem]" data-component="heading">
                {d.title3}
              </h4>
              {" "}
            </div>
            {" "}
            <a data-cid={cids[20]} className="w-[13.6125rem] h-full block absolute top-px left-px z-100 text-primary cursor-pointer max-md:w-[19.0875rem] md:max-lg:w-[637.5px] 2xl:w-[263.3px]" data-component="link" href="/our-services" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
