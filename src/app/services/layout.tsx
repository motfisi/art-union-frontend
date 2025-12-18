import { PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ART UNION",
  description: "art union design studio",
};

const ServicesLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default ServicesLayout;
