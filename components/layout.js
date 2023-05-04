import Navbar from "./Navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Hero from "./hero";
import { Submenu } from "./submenu";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
