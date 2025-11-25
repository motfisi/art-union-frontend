import { PropsWithChildren } from "react";

import ThemeProvider from "@/lib/materialUI";
import Layout from "@/components/Layout";

import type { Metadata } from "next";
import { manrope, involve, unista } from "./fonts";

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
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
