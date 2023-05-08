import "@/styles/globals.css";
import Layout from "../components/layout";
import "@/styles/propertiesList.css";

import { AppProvider } from "./context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
