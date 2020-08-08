import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { auth } from "firebase";

import Header from "components/common/header";
//import { Login } from "types/login";
import "assets/css/reset.css";

const ResourceContext = React.createContext("");

const App = ({ Component, pageProps }: AppProps) => {
  const getResource = async () => {
    const doAuth = async () => {
      return new Promise<firebase.User | null>((resolve) => {
        auth.onAuthStateChanged((user) => {
          resolve(user);
        });
      });
    };
    const result = await doAuth();
    if (result) {
      return { email: result.email ? result.email : "" };
    } else {
      return null;
    }
  };

  const resource = await getResource();

  return (
    <>
      <Head>
        <title key="title">{pageProps.title}</title>
      </Head>
      <ResourceContext.Provider value={resource ? resource.email : ""}>
        <Header title={pageProps.title} />
        <Component {...pageProps} />
      </ResourceContext.Provider>
    </>
  );
};

export default App;
