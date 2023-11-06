"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const queryClient = new QueryClient();

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <head>
      <title>Github Search</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    </head>
    <body style={{ margin: 0, padding: 0 }}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
