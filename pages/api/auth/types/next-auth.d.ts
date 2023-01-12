import { Session } from "next-auth"

declare module "next-auth" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface Session {
    /** OpenID ID Token */
    accessToken?: string;
  }
}