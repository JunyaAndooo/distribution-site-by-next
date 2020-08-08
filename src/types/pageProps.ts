import "next";
declare module "next" {
  export type PageProps = {
    title: string;
  };
  // PageComponent に適用する型
  // eslint-disable-next-line @typescript-eslint/ban-types
  export type PageFC<P = {}, IP = P & PageProps> = NextPage<P, IP>;
}
