/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

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
    position: absolute;
    height: 168px;
    left: 0%;
    right: 0%;
    top: 0px;
  `,
  title: css`
    position: absolute;
    width: 100%;
    height: 168px;
    left: 0px;
    top: 0px;
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

const Header = (props: Props) => {
  return (
    <>
      <Global styles={globalCss} />
      <div css={styles.titleBase}>
        <h1 css={styles.title}>{props.title}</h1>
      </div>
    </>
  );
};

export default Header;
