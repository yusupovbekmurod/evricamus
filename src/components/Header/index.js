import "./style.css";
import { NavLink, Route, Routes } from "react-router-dom";


const activeStyle = {
  backgroundColor: "aqua",
};

const getStyle = (isActive) => {
  if (isActive) {
    return activeStyle;
  }
  return {};
};

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="#" alt="logo" />
        <ul>
          <li>
            <NavLink style={(props) => getStyle(props.isActive)} to="/topiboldim">
              Topib oldim
            </NavLink>
          </li>
          <li>
            <NavLink style={(props) => getStyle(props.isActive)} to="/yoqotdim">
              Yo'qotdim
            </NavLink>
          </li>
          <li>
            <NavLink style={(props) => getStyle(props.isActive)} to="/profil">
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink style={(props) => getStyle(props.isActive)} to="/kirish">
              Kirish
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
