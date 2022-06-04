import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
