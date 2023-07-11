"use client";

import { AuthenticationMyUserProvider } from "@/context/authenticationUser";
import { GlobalStyle } from "@/styles/global";
import { StyleSheetManager } from "styled-components";

import NoSsr from "../dynamic/NoSsr";
import { MyMovieAndSerieProvider } from "@/context/myMovieAndSerie";

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
          <MyMovieAndSerieProvider>
            <NoSsr>
              {children}
              <GlobalStyle />
            </NoSsr>
          </MyMovieAndSerieProvider>
        </AuthenticationMyUserProvider>
      </body>
      {/* </StyleSheetManager> */}
    </html>
  );
}
