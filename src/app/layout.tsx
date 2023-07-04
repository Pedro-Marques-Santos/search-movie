"use client";

import { AuthenticationMyUserProvider } from "@/context/authenticationUser";
import { GlobalStyle } from "@/styles/global";
import { StyleSheetManager } from "styled-components";

import NoSsr from "../dynamic/NoSsr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <StyleSheetManager> */}
      <body>
        <AuthenticationMyUserProvider>
          <NoSsr>
            {children}
            <GlobalStyle />
          </NoSsr>
        </AuthenticationMyUserProvider>
      </body>
      {/* </StyleSheetManager> */}
    </html>
  );
}
