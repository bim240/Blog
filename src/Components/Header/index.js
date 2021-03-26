import { Button, Switch } from "antd";
import { useState } from "react";
import { HeaderWrapper } from "./StyledComponents";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import NavBar from "Components/NavBar";

const Header = (props) => {
  const { toggleTheme } = props;

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="logo_title">
          <Button
            className="toggle_btn"
            onClick={() => setShowNavBar(!showNavBar)}>
            {showNavBar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <img src="https://cdn2.iconfinder.com/data/icons/flat-education-icons-5/96/Writing-512.png" />
          <h1>My Writings</h1>
        </div>
        <Switch onChange={toggleTheme} />
      </div>
      <div className="absolute_navbar">
        {showNavBar && <NavBar className="header_navbar" />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
