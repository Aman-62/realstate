// import logo from "/logo.png";
import { useGlobalContext } from "@/pages/context";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav  bg-slate-100" onMouseOver={handleSubmenu}>
      <div className="nav-center ">
        <div className="nav-header">
          <Link href="/">
            <img src="/logo.png" className="nav-logo" alt="Realstate" />
          </Link>
          <button className="btnNav toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn ">
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
        <div className="btnGroup">
          <button className="btnNav signin-btn">Sign In</button>
          <button className="btnNav signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <h1>RealState</h1>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#">Home</Nav.Link>

    //         <NavDropdown title="For Buyers" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#">Something</NavDropdown.Item>
    //           {/* <NavDropdown.Divider /> */}
    //           <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
    //         </NavDropdown>

    //         <NavDropdown title="For Sellers" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#">Something</NavDropdown.Item>
    //           {/* <NavDropdown.Divider /> */}
    //           <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //         <Link href="/form">Form</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    // <div className="header header-transparent change-logo">
    //   <div className="container">
    //     <nav id="navigation" className="navigation navigation-landscape">
    //       <div className="nav-header">
    //         <a className="nav-brand static-logo" href="#">
    //           <img src="assets/img/logo-light.png" className="logo" alt="" />
    //         </a>
    //         <a className="nav-brand fixed-logo" href="#">
    //           <img src="assets/img/logo.png" className="logo" alt="" />
    //         </a>
    //         <div className="nav-toggle" />
    //         <div className="mobile_nav">
    //           <ul>
    //             <li className="list-buttons">
    //               <a
    //                 href="JavaScript:Void(0);"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#login"
    //               >
    //                 <i className="fas fa-sign-in-alt me-2" />
    //                 Log In
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div
    //         className="nav-menus-wrapper"
    //         style={{ transitionProperty: "none" }}
    //       >
    //         <ul className="nav-menu">
    //           <li className="active">
    //             <a href="JavaScript:Void(0);">
    //               Home
    //               <span className="submenu-indicator" />
    //             </a>
    //             <ul className="nav-dropdown nav-submenu">
    //               <li>
    //                 <a className="active" href="index.html">
    //                   Home Layout 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="home-2.html">Home Layout 2</a>
    //               </li>
    //               <li>
    //                 <a href="home-3.html">Home Layout 3</a>
    //               </li>
    //               <li>
    //                 <a href="home-4.html">Home Layout 4</a>
    //               </li>
    //               <li>
    //                 <a href="home-5.html">Home Layout 5</a>
    //               </li>
    //               <li>
    //                 <a href="home-6.html">Home Layout 6</a>
    //               </li>
    //               <li>
    //                 <a href="home-7.html">Home Layout 7</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="JavaScript:Void(0);">
    //               Searches
    //               <span className="submenu-indicator" />
    //             </a>
    //             <ul className="nav-dropdown nav-submenu">
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   Grid Layout
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="grid-style-1.html">Grid Style 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="grid-style-2.html">Grid Stle 2</a>
    //                   </li>
    //                   <li>
    //                     <a href="grid-style-3.html">Grid Style 3</a>
    //                   </li>
    //                   <li>
    //                     <a href="grid-full-style-1.html">Grid Full Style 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="grid-full-style-2.html">Grid Full Style 2</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   List Layout
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="list-style-1.html">List Style 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="list-style-2.html">List Style 2</a>
    //                   </li>
    //                   <li>
    //                     <a href="list-full-style-1.html">List Full Style 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="list-full-style-2.html">List Full Style 2</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   Search With Map
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="half-map.html">Half Map Style 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="half-map-2.html">Half Map Style 2</a>
    //                   </li>
    //                   <li>
    //                     <a href="half-map-3.html">Half Map Style 3</a>
    //                   </li>
    //                   <li>
    //                     <a href="half-map-list.html">Half Map List Search 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="half-map-list-2.html">
    //                       Half Map List Search 2
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="JavaScript:Void(0);">
    //               Features
    //               <span className="submenu-indicator" />
    //             </a>
    //             <ul className="nav-dropdown nav-submenu">
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   Single Property
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="single-property-1.html">Single Property 1</a>
    //                   </li>
    //                   <li>
    //                     <a href="single-property-2.html">Single Property 2</a>
    //                   </li>
    //                   <li>
    //                     <a href="single-property-3.html">Single Property 3</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   Agencies &amp; Agents
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="agent-grid.html">Agents Search Grid</a>
    //                   </li>
    //                   <li>
    //                     <a href="agent-list.html">Agent Search List</a>
    //                   </li>
    //                   <li>
    //                     <a href="agency-grid.html">Agency Search Grid</a>
    //                   </li>
    //                   <li>
    //                     <a href="agency-list.html">Agency Search List</a>
    //                   </li>
    //                   <li>
    //                     <a href="agent-detail.html">Agent Detail</a>
    //                   </li>
    //                   <li>
    //                     <a href="agency-detail.html">Agency Detail</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="JavaScript:Void(0);">
    //                   My Account
    //                   <span className="submenu-indicator" />
    //                 </a>
    //                 <ul className="nav-dropdown nav-submenu">
    //                   <li>
    //                     <a href="dashboard.html">User Dashboard</a>
    //                   </li>
    //                   <li>
    //                     <a href="submit-property-dashboard.html">
    //                       Submit Property
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="my-profile.html">My Profile</a>
    //                   </li>
    //                   <li>
    //                     <a href="my-property.html">Property List</a>
    //                   </li>
    //                   <li>
    //                     <a href="bookmark-list.html">Bookmarked Listings</a>
    //                   </li>
    //                   <li>
    //                     <a href="change-password.html">Change Password</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="compare-property.html">Compare Property</a>
    //               </li>
    //               <li>
    //                 <a href="submit-property.html">Submit Property</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="JavaScript:Void(0);">
    //               Pages
    //               <span className="submenu-indicator" />
    //             </a>
    //             <ul className="nav-dropdown nav-submenu">
    //               <li>
    //                 <a href="about-us.html">About Us</a>
    //               </li>
    //               <li>
    //                 <a href="404.html">Error Page</a>
    //               </li>
    //               <li>
    //                 <a href="checkout.html">Checkout</a>
    //               </li>
    //               <li>
    //                 <a href="blog.html">Blogs Page</a>
    //               </li>
    //               <li>
    //                 <a href="blog-detail.html">Blog Detail</a>
    //               </li>
    //               <li>
    //                 <a href="privacy.html">Terms &amp; Privacy</a>
    //               </li>
    //               <li>
    //                 <a href="pricing.html">Pricing</a>
    //               </li>
    //               <li>
    //                 <a href="faq.html">FAQ's</a>
    //               </li>
    //               <li>
    //                 <a href="contact.html">Contacts</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a
    //               href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
    //               target="_blank"
    //             >
    //               Help
    //             </a>
    //           </li>
    //         </ul>
    //         <ul className="nav-menu nav-menu-social align-to-right">
    //           <li className="list-buttons light">
    //             <a
    //               href="JavaScript:Void(0);"
    //               data-bs-toggle="modal"
    //               data-bs-target="#login"
    //             >
    //               <i className="fas fa-sign-in-alt me-2" />
    //               Sign In
    //             </a>
    //           </li>
    //           <li className="list-buttons ms-2">
    //             <a href="signup.html">
    //               <i className="fas fa-user-alt me-2" />
    //               Sign Up
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Navbar;
