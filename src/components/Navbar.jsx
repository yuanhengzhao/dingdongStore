import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const tabList = [
    { path: '/', title: 'Home' },
    // { path: '/adoption_steps', title: 'Adoption Steps' },
    { path: '/faq', title: 'FAQs' },
    { path: '/available_kittens', title: 'available Kittens' },
  ];
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-b navbar-trans flexBox fixed-top"
      id="mainNav"
    >
      <div className="container justify-content-end">
        <div className="justify-content-end">
          <ul className="navbar-nav flexBox">
            {tabList.map((tab) => (
              <li className="nav-item" key={tab.title}>
                <Link
                  className={`nav-link ${
                    tab.path === location.pathname ? 'active' : ''
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
