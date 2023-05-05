import "@/styles/globals.css";
import Layout from "../components/layout";

import Navbar from "@/components/header/Navbar";
import Sidebar from "@/components/header/sidebar";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer/footer";
import { Submenu } from "@/components/header/submenu";

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
