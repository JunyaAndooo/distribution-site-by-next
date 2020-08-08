import { PageFC } from "next";
import Images from "../components/images";

/*
 * Content
 */
type Props = {
  title: string;
  keyword: string;
};

const Search: PageFC<Props> = (props: Props) => {
  const { keyword } = props;
  return <Images searchWord={keyword} />;
};

Search.getInitialProps = async ({ query: { keyword } }) => {
  keyword = typeof keyword === "string" ? keyword : "";
  return {
    title: "結果ページ",
    keyword,
  };
};

export default Search;
