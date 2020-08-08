import { PageFC } from "next";
import TopPage from "pages/topPage";

const Index: PageFC = () => {
  return (
    <>
      <TopPage />
    </>
  );
};

Index.getInitialProps = async () => {
  return {
    title: "検索ページ",
  };
};

export default Index;
