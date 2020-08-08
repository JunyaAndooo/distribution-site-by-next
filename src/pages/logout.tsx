import { auth } from "../firebase";
import Router from "next/router";
import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    auth.signOut().then(() => {
      Router.push("/");
    });
  }, []);
  return <></>;
};

Logout.getInitialProps = async () => {
  return {
    title: "ログアウト",
  };
};

export default Logout;
