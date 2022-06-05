import Head from "next/head";
import App from "../components/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Expenses Chart</title>
        <meta name="description" content="Expenses Chart by Shaun Carr" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <App />
    </>
  );
}
