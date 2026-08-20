export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, cids }: { d: ListRow2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item relative pl-7.5 before:content-['.'] before:block before:absolute before:top-[0.5625rem] before:right-[20.225rem] before:bottom-[1.4375rem] before:left-0 before:w-1.5 before:h-0 before:text-foreground before:text-[1.625rem] before:leading-0 max-md:before:right-[19.5375rem] md:max-lg:before:right-[651.5px] 2xl:before:right-[24.4375rem]">
      {d.text}
    </li>
  );
}
