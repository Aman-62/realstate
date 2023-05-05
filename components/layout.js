import Navbar from "./header/Navbar";
import Footer from "./footer/footer";
import Sidebar from "./header/sidebar";
import { Submenu } from "./header/submenu";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
