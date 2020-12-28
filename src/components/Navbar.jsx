import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const tabList = [
    { path: "/dingdongStore/", title: "Home" },
    { path: "/dingdongStore/adoption_steps", title: "Adoption Steps" },
    { path: "/dingdongStore/faq", title: "FAQs" },
    { path: "/dingdongStore/available_kittens", title: "available Kittens" },
  ];
  const location = useLocation();
  return (
    <nav
      className='navbar navbar-b navbar-trans navbar-expand-md fixed-top'
      id='mainNav'
    >
      <div className='container'>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#navbarDefault'
          aria-controls='navbarDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className='navbar-collapse collapse justify-content-end'
          id='navbarDefault'
        >
          <ul className='navbar-nav'>
            {tabList.map((tab) => (
              <li className='nav-item' key={tab.title}>
                <Link
                  className={`nav-link ${
                    tab.path === location.pathname ? "active" : ""
                  }`}
                  to={tab.path}
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
