import { NavLink, Outlet } from "react-router";
import "./header.css";
export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink className="NavLink" to="/">
            <h2>Logo</h2>
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className={( {isActive} ) => isActive?'custom-active':'NavLink'} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/users/list">
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
