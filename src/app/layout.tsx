import { roboto } from "@/fonts/my-fonts";
import "./globals.css";
import { AuthenticationMyUserProvider } from "@/context/authenticationUser";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <AuthenticationMyUserProvider>
        <body>{children}</body>
      </AuthenticationMyUserProvider>
    </html>
  );
}
