import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <header>
      <div className="div1">
    <br /><br />
    <Link to="/">Անհատներ</Link>
    <br /><br />
  <Link to="/business">Բիզնես</Link>

    <br /><br />

    <i className="fa fa-phone" aria-hidden="true"></i>
    <p id="br6">444 | 011 444 444</p>
    <br />

    <i className="fa fa-question-circle" aria-hidden="true"></i>
    <a id="br4" href="https://www.ucom.am/help">Օգնություն</a>
    <br /><br />

    <p id="br3">Մուտք</p>
    <br /><br />

    <i className="fa fa-globe" aria-hidden="true"></i>
    <p id="br5">Հայ</p>

    <nav className="lg_block drop_block">
      <button
        className="drop_btn icon_globe"
        aria-label="language switcher"
      ></button>

      <a
        className="lang-switcher-item dropdown-item"
        href="https://www.ucom.am/en/utravel"
      ></a>
    </nav>
  </div>
    </header>
  );
}

export default Header;