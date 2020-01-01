import React from "react";

const Navigation = () => {

  const toggleClick = () => {
    console.log('click');
  }

  return (
    <nav className="nav">
      <div className="nav__menu flex-row">
        <div className="nav__brand">
          <a href="www.blogger.com" className="text-gray">
            Blooger
          </a>
        </div>

        <div className="nav__toggle-collapse">
          <div onClick={toggleClick} className="nav__toggle-icons">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>

        <div>
          <ul className="nav__items">
            <li className="nav__items-link">
              <a href="www.blogger.com">Home</a>
            </li>
            <li className="nav__items-link">
              <a href="www.blogger.com">Category</a>
            </li>
            <li className="nav__items-link">
              <a href="www.blogger.com">Archive</a>
            </li>
            <li className="nav__items-link">
              <a href="www.blogger.com">Pages</a>
            </li>
            <li className="nav__items-link">
              <a href="www.blogger.com">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="nav__social nav__text-gray">
          <a href="www.blogger.com">
            <i class="fa fa-facebook" aria-hidden="true"></i> 
          </a>
          <a href="www.blogger.com">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="www.blogger.com">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="www.blogger.com">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
