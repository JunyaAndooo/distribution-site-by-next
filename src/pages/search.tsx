import { NextPage, PageProps } from "next";
import Images from "../components/images";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
/*
 * Content
 */
const Search: NextPage<WithRouterProps & PageProps> = (
  prop: WithRouterProps
) => {
  return (
    <>
      <Images searchWord={prop.router.query.keyword} />
    </>
  );
};

Search.getInitialProps = async () => {
  return {
    title: "結果ページ",
  };
};

export default withRouter(Search);
