import { SWRConfig } from "swr";

import { ContextProvider } from "../context";
import { fetcher } from "../utils";
import PageAnimate from "../components/PageAnimate";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  return (
    <PageAnimate router={router}>
      <ContextProvider>
        <SWRConfig
          value={{
            fetcher: (url, _) => fetcher(url, accessToken),
            revalidateOnFocus: false,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ContextProvider>
    </PageAnimate>
  );
}

export default MyApp;
