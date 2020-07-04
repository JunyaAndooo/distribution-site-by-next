import Head from "next/head";
import Header from "../components/common/header";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/*
 * CSS
 */
const styles = {
  content: css`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15.75%;
    bottom: 0%;
  `,
};

/*
 * Content
 */
const TopPage = (prps: any) => {
  return (
    <>
      <Head>
        <title key="title">検索ページ</title>
      </Head>
      <Header title="検索ページ" />
      <div css={styles.content}>testtesttest</div>
    </>
  );
};

export default TopPage;
