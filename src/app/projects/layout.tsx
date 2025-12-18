import { type PropsWithChildren } from "react";

import Layout from "@/components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ART UNION",
  description: "art union design studio",
};

const ProjectsLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout withoutPadding>{children}</Layout>;
};

export default ProjectsLayout;
