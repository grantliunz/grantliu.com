import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grant Liu</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
