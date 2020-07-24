import Head from "next/head";
import Images from "../components/images";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
/*
 * Content
 */
const Search = (prop: WithRouterProps) => {
  return (
    <>
      <Head>
        <title key="title">結果ページ</title>
      </Head>
      <Images searchWord={prop.router.query.keyword} />
    </>
  );
};

export default withRouter(Search);
