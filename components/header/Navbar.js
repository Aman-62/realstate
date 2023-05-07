// import logo from "/logo.png";
import { useGlobalContext } from "@/pages/context";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav  bg-slate-100" onMouseOver={handleSubmenu}>
      <div className="nav-center ">
        <div className="nav-header">
          <Link href="/">
            <Image
              src="/logo.png"
              width={120}
              height={100}
              className="nav-logo"
              alt="Realstate"
            />
          </Link>
          <button
            className="btnNav bg-sky-700 hover:bg-slate-700 toggle-btn"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              for buyers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              for tenants
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              for owners
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <div className="navBtnGroup">
          <button className="btnNav signIn-btn hover:bg-slate-900">
            Sign In
          </button>
          <button className="btnNav signUp-btn hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
