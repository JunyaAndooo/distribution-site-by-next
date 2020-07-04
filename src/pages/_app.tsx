import { AppProps } from "next/app";
import "../assets/css/reset.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
