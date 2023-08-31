import { NavLink } from "react-router-dom";

function LogNav() {
  return (
    <div>
      LogNav
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="Countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default LogNav;
