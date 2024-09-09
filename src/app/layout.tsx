"use client";

import "@mantine/core/styles.css";
import { theme } from "./utils/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Electrolize } from "next/font/google";
import { RecoilRoot } from "recoil";

const electrolize = Electrolize({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* remove white border */}
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body
        className={electrolize.className}
        style={{ background: theme?.colors?.primary?.[9] }}
      >
        <MantineProvider theme={theme}>
          <RecoilRoot>{children}</RecoilRoot>
        </MantineProvider>
      </body>
    </html>
  );
}
