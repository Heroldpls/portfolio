import { useState } from "react";
import "../css/navbar.css";

function NavbarView() {
  const [location, setLocation] = useState("home"); // For button state.

  return (
    <div className="navbar">
      <button
        className={location === "home" ? "buttonSelected" : "navbarButton"}
        onClick={onClickHomeACB}
      >
        {" "}
        Home{" "}
      </button>
      <button
        className={location === "projects" ? "buttonSelected" : "navbarButton"}
        onClick={onClickProjectsACB}
      >
        Projects
      </button>
      <button
        className={location === "cv" ? "buttonSelected" : "navbarButton"}
        onClick={onClickCVACB}
      >
        CV
      </button>
    </div>
  );

  function onClickHomeACB() {
    window.location.hash = "#/home";
    setLocation("home");
  }
  function onClickProjectsACB() {
    window.location.hash = "#/projects";
    setLocation("projects");
  }
  function onClickCVACB() {
    window.location.hash = "#/CV";
    setLocation("cv");
  }
}

export default NavbarView;
