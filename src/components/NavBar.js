import React from "react";

function NavBar() {
  const Links = ["home", "about", "projects"];

  return <nav>
    <a href="#home">{Links[0]}</a>
    <a href="#about">{Links[1]}</a>
    <a href="#projects">{Links[2]}</a>
  </nav>;  
}

export default NavBar;
