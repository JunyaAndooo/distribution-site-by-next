import Head from "next/head";
import SearchWindow from "../components/searchWindow";

/*
 * Content
 */
const TopPage = () => {
  return (
    <>
      <Head>
        <title key="title">検索ページ</title>
      </Head>
      <SearchWindow />
    </>
  );
};

export default TopPage;
