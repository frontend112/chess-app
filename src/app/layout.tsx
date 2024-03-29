import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "chess app",
  description: "You can play in chess here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
