/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useContext } from "react";
import { auth } from "../firebase";
import Router from "next/router";

import { AuthContext } from "components/common/authProvider";
import { PageFC } from "next";

/**
 * Content
 */
const Signup: PageFC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useContext(AuthContext);

  if (authContext.authenticated) {
    Router.push("/");
    return <></>;
  }

  const signup = async (email: string, password: string) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      authContext.setUser && authContext.setUser({ email: email });
      Router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          css={styles.email}
          placeholder="メールアドレス"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          css={styles.password}
          placeholder="パスワード"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="button"
          css={styles.loginButton}
          value="登録する"
          onClick={() => {
            signup(email, password);
          }}
        />
      </div>
    </>
  );
};

Signup.getInitialProps = async () => {
  return {
    title: "アカウント作成",
  };
};

/**
 * CSS
 */
const styles = {
  email: css`
    position: absolute;
    width: 930px;
    height: 141px;
    left: 376px;
    top: 368px;

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

export default Signup;
