import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased dark bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
