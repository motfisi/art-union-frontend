import { PropsWithChildren } from "react";

import Layout from "@/components/Layout";

const MainLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export default MainLayout;
