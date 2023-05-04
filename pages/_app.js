import "@/styles/globals.css";
import Layout from "../components/layout";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Submenu } from "@/components/submenu";

import { AppProvider } from "./context";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </SSRProvider>
    </>
  );
}
