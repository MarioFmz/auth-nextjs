import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/auth";
import type { Session } from "next-auth"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
          <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}
