/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import React from "react";

/*
 * CSS
 */
const globalCss = css`
  * {
    margin: 0;
    padding: 0;
  }
`;

const styles = {
  titleBase: css`
    width: 100%;
    height: 168px;
  `,
  title: css`
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
    color: #ffffff;
    background: #2f80ed;
  `,
};

/*
 * Content
 */
interface Props {
  title: string;
}

const ResourceContext = React.createContext("");

const Header = (props: Props) => {
  return (
    <>
      <Global styles={globalCss} />
      <div css={styles.titleBase}>
        <h1 css={styles.title}>{props.title}</h1>
        <ResourceContext.Consumer>
          {(resourceEmail) => <div>{resourceEmail}</div>}
        </ResourceContext.Consumer>
      </div>
    </>
  );
};

export default Header;
