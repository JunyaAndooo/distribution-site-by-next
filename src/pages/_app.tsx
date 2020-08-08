import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { AuthProvider } from "components/common/authProvider";
import Header from "components/common/header";
import "assets/css/reset.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title key="title">{pageProps.title}</title>
      </Head>
      <AuthProvider>
        <Header title={pageProps.title} />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
};

export default App;
