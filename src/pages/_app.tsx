import { AppProps } from "next/app";
import Head from "next/head";

import Header from "components/common/header";
import "../assets/css/reset.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title key="title">{pageProps.title}</title>
      </Head>
      <Header title={pageProps.title} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
