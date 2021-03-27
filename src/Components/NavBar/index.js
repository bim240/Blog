import { Menu } from "antd";
import { useState } from "react";
import allData from "Data";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const getIcon = (name) => {
  switch (name) {
    case "Python":
      return <FaPython className="language_icon" />;
    case "Javascript":
      return <IoLogoJavascript className="language_icon" />;

    default:
      break;
  }
};

const { SubMenu } = Menu;

const NavBar = (props) => {
  const {
    theme,
    className,
    setSelectedArticle,
    setShowNavBar,
    selectedArticle,
  } = props;
  const [selectedKey, setSelectedKey] = useState(
    selectedArticle?.index1
      ? selectedArticle.index1 +
          "@" +
          selectedArticle.index2 +
          "@" +
          selectedArticle.id
      : "0@0@" + allData[0]?.articles[0]?.id
  );

  const handleSelectedKeyChange = ({ key }) => {
    setSelectedKey(key);
    setSelectedArticle({
      index1: key.split("@")[0],
      index2: key.split("@")[1],
      id: key.split("@")[2],
    });
    setShowNavBar && setShowNavBar();
  };

  return (
    <Menu
      theme={theme}
      onClick={handleSelectedKeyChange}
      selectedKeys={selectedKey}
      className={className}
      mode="inline">
      {allData?.map((singelLanguage, index1) => (
        <SubMenu
          key={`sub${index1 + 1}`}
          icon={getIcon(singelLanguage.name)}
          title={singelLanguage.name}>
          {singelLanguage?.articles?.map((article, index2) => (
            <Menu.Item key={index1 + "@" + index2 + "@" + article.id}>
              {article.heading}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default NavBar;
