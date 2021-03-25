import { Switch } from "antd";
import { NavBarWrapper } from "./StyledComponents";

const Header = (props) => {
  const { toggleTheme } = props;
  return (
    <NavBarWrapper>
      <div className="container">
        <div className="logo_title">
          <img src="https://cdn2.iconfinder.com/data/icons/flat-education-icons-5/96/Writing-512.png" />
          <h1>My Writings</h1>
        </div>
        <Switch onChange={toggleTheme} />
      </div>
    </NavBarWrapper>
  );
};

export default Header;
