import { useState, FormEvent } from "react";
import Router from "next/router";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = {
  searchbox: css`
    width: 100%;
    height: 500px;
    text-align: center;
    vertical-align: center;
  `,
  searchbox_dev: css`
    background: #ffffff;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  `,
  searchbox__input: css`
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
  `,
};

/*
 * Content
 */
const SearchWindow = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    Router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
  };

  return (
    <form onSubmit={handleSubmit} css={styles.searchbox}>
      <div css={styles.searchbox_dev}>
        <input
          placeholder="無料素材を検索"
          onChange={handleChange}
          css={styles.searchbox__input}
        />
      </div>
    </form>
  );
};

export default SearchWindow;
