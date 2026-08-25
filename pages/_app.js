import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import SEO from "../next-seo.config";
import { BASE } from "../config/site";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href={`${BASE}/favicon.ico`} />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
