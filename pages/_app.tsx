import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/auth";
import Layout from '../Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}
