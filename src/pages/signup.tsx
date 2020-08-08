/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useContext } from "react";
import { auth } from "../firebase";
import Router from "next/router";
import { useForm } from "react-hook-form";

import { AuthContext } from "components/common/authProvider";
import { PageFC } from "next";

/**
 * Content
 */
interface FormData {
  email: string;
  password: string;
}

const Signup: PageFC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authContext = useContext(AuthContext);

  if (authContext.authenticated) {
    Router.push("/");
    return <></>;
  }

  const { register, handleSubmit, errors } = useForm<FormData>({
    mode: "onBlur",
  });

  const signup = async (login: FormData) => {
    try {
      await auth.createUserWithEmailAndPassword(login.email, login.password);
      authContext.setUser && authContext.setUser({ email: login.email });
      Router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(() =>
        signup({ email: email, password: password })
      )}
      css={styles.form}
    >
      <div>
        <input
          type="text"
          css={styles.email}
          placeholder="メールアドレス"
          value={email}
          name="email"
          ref={register({
            required: true,
            maxLength: 200,
            pattern: /^[a-zA-Z0-9!-/-@]+$/i,
          })}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
        {errors.email && errors.email.type === "required" && (
          <div css={styles.errorMessage}>メールアドレスは必須となります。</div>
        )}
        {errors.email && errors.email.type === "maxLength" && (
          <div css={styles.errorMessage}>
            メールアドレスは200文字以下でなければなりません。
          </div>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <div css={styles.errorMessage}>
            メールアドレスは半角英数字で入力してください。
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
          css={styles.password}
          placeholder="パスワード"
          value={password}
          name="password"
          ref={register({
            required: "パスワードは必須となります。",
            maxLength: {
              value: 20,
              message:
                "パスワードは8文字以上、20文字以下でなければなりません。",
            },
            minLength: {
              value: 8,
              message:
                "パスワードは8文字以上、20文字以下でなければなりません。",
            },
          })}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        {errors.password && (
          <div css={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <div>
        <input type="submit" css={styles.loginButton} value="登録する" />
      </div>
    </form>
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
  form: css`
    width: 100%;
    height: 700px;
    text-align: center;
  `,
  email: css`
    width: 930px;
    height: 141px;

    background: #ffffff;
    border: 5px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;

    color: #787878;

    display: inline-block;
  `,
  password: css`
    width: 930px;
    height: 141px;

    background: #ffffff;
    border: 5px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;

    color: #787878;
  `,
  loginButton: css`
    width: 522px;
    height: 134px;
    left: calc(50% - 522px / 2);
    top: calc(50% - 134px / 2 + 351.5px);

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    align-items: center;
    text-align: center;

    color: #ffffff;
    background: #2f80ed;
    border-radius: 15px;
  `,
  errorMessage: css`
    font-family: Roboto;
    font-size: 50px;
    color: red;
  `,
};

export default Signup;
