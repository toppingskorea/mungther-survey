import { GlobalCSS } from "@/styles";
import { hotjar } from "react-hotjar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const client = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  styles: {
    global: {
      html: {
        backgroundColor: "#FFFFF0",
      },
    },
  },

  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
  },
});

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize(3510722, 6);
    }
  }, []);
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <GlobalCSS font={inter.style.fontFamily} />
          <Analytics />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
