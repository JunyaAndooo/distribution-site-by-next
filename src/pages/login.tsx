/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import Router from "next/router";

import { AuthContext } from "components/common/authProvider";
import { User } from "types/user";
import { PageFC } from "next";

/**
 * Content
 */
const Login: PageFC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useContext(AuthContext);

  if (authContext.authenticated) {
    Router.push("/");
    return <></>;
  }

  const login = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      authContext.setUser && authContext.setUser({ email: email });
      Router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div css={styles.emailBox}>
        <input
          type="text"
          css={styles.email}
          placeholder="メールアドレス"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          css={styles.password}
          placeholder="パスワード"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <input
        type="button"
        css={styles.loginButton}
        value="ログインする"
        onClick={() => {
          login(email, password);
        }}
      />
    </>
  );
};

Login.getInitialProps = async () => {
  return {
    title: "ログイン",
  };
};

/**
 * CSS
 */
const styles = {
  emailBox: css`
    position: absolute;
    width: 930px;
    height: 141px;
    left: 376px;
    top: 368px;
    background: #ffffff;
    border: 5px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
  `,
  email: css`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #787878;
    border: none;
  `,
  password: css`
    position: absolute;
    width: 930px;
    height: 141px;
    left: 376px;
    top: 579px;

    background: #ffffff;
    border: 5px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #787878;
  `,
  loginButton: css`
    position: absolute;
    width: 522px;
    height: 134px;
    left: calc(50% - 522px / 2);
    top: calc(50% - 134px / 2 + 351.5px);

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
    background: #2f80ed;
    border-radius: 15px;
  `,
};

export default Login;
