/* eslint-disable @next/next/no-page-custom-font */
import { inter, roboto } from "@/fonts/my-fonts";
import { AuthenticationMyUserProvider } from "@/context/authenticationUser";
import StyledJsxRegistry from "./registrystyledcomponents";
import { GlobalStyle } from "@/styles/global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthenticationMyUserProvider>
        <StyledJsxRegistry>
          <body>
            {children}
            <GlobalStyle />
          </body>
        </StyledJsxRegistry>
      </AuthenticationMyUserProvider>
    </html>
  );
}
