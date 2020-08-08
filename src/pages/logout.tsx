import { auth } from "../firebase";
import Router from "next/router";
import { useEffect } from "react";
import { PageFC } from "next";

const Logout: PageFC = () => {
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
