"use client";

import { AuthenticationMyUserProvider } from "@/context/authenticationUser";
import { GlobalStyle } from "@/styles/global";

import { MyMovieAndSerieProvider } from "@/context/myMovieAndSerie";
import StyledComponentsRegistry from "./registrystyledcomponents";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <StyleSheetManager> */}
      <body>
        <StyledComponentsRegistry>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <AuthenticationMyUserProvider>
              <MyMovieAndSerieProvider>
                {/* <NoSsr> */}
                {children}
                <GlobalStyle />
                {/* </NoSsr> */}
              </MyMovieAndSerieProvider>
            </AuthenticationMyUserProvider>
          </StyleSheetManager>
        </StyledComponentsRegistry>
      </body>
      {/* </StyleSheetManager> */}
    </html>
  );
}
