"use client";

import ContentContainer from "@/containers/ContentContainer";
import NextTopLoader from "nextjs-toploader";
import { useDarkModeContext } from "@/context/DarkModeContext";
import React from "react";

const HomePage: React.FC = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <React.Fragment>
      <NextTopLoader color={darkMode ? "#b21900" : "#3399ff"} showSpinner={false} initialPosition={0.5} crawlSpeed={50} speed={50} />
      <ContentContainer />
    </React.Fragment>
  );
};

export default HomePage;
