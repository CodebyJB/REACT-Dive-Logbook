import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      PageNav
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/logbook">Logbook</NavLink>
    </div>
  );
}

export default PageNav;
