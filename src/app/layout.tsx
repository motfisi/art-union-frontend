import { PropsWithChildren } from "react";

import AOSInit from "@/components/AOSInit";
import Layout from "@/components/Layout";
import ThemeProvider from "@/lib/materialUI";

import { manrope, involve, unista } from "./fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ART UNION",
  description: "art union design studio",
};

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${involve.variable} ${unista.variable}`}
    >
      <body>
        <ThemeProvider>
          <AOSInit />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
