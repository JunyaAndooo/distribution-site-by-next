/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { useContext } from "react";
import { AuthContext } from "components/authProvider";
import Link from "next/link";

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
    height: 130px;
    display: flex;
    background: #2f80ed;
    align-items: center;
  `,
  title: css`
    height: 100%;
    width: 50%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    color: #ffffff;
  `,
  login_area: css`
    height: 100%;
    width: 50%;
    font-family: Roboto;
    font-size: 36px;
    color: #ffffff;
    text-align: right;
  `,
  login__link: css`
    font-family: Roboto;
    font-size: 36px;
    width: auto;
    color: #ffffff;
    text-align: right;
    cursor: pointer;
  `,
};

/*
 * Content
 */
interface Props {
  title: string;
}

const Header = (props: Props) => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <Global styles={globalCss} />
      <div css={styles.titleBase}>
        <h1 css={styles.title}>{props.title}</h1>
        <div css={styles.login_area}>
          {authContext.authenticated ? (
            <>
              <div>{authContext.user?.email}</div>
              <Link href="/logout">
                <a css={styles.login__link}>Logout</a>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <a css={styles.login__link}>Login</a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
