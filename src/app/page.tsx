"use client";

import ContentContainer from "@/containers/ContentContainer";
import NextTopLoader from "nextjs-toploader";
import { theme } from "antd";
import React from "react";

const HomePage: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <React.Fragment>
      <NextTopLoader
        color={token.colorPrimary}
        showSpinner={false}
        initialPosition={0.5}
        crawlSpeed={50}
        speed={50}
      />
      <ContentContainer />
    </React.Fragment>
  );
};

export default HomePage;
