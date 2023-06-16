"use client";

import { AuthenticationMyUserProvider } from "@/context/authenticationUser";
import { GlobalStyle } from "@/styles/global";
import { StyleSheetManager } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyleSheetManager>
        <body>
          <AuthenticationMyUserProvider>
            {children}
            <GlobalStyle />
          </AuthenticationMyUserProvider>
        </body>
      </StyleSheetManager>
    </html>
  );
}
