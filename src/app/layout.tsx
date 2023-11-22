"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import useStyles from "@/hooks/useStyles";
import Providers from "@/app/providers";

const queryClient = new QueryClient();

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles();
  return (
    <html lang="en">
      <head>
        <title>Github Search</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body className={styles.mainWrapper}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
