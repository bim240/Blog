import { Menu } from "antd";
import { useState } from "react";
import allData from "Data";

const { SubMenu } = Menu;
const NavBar = (props) => {
  const { theme, className } = props;
  const [selectedKey, setSelectedKey] = useState("");

  const handleSelectedKeyChange = ({ item, key }) => {
    setSelectedKey(key);
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
          // icon={<MailOutlined />}
          title={singelLanguage.name}>
          {singelLanguage?.articles?.map((article, index2) => (
            <Menu.Item key={singelLanguage.name + "@" + article.id}>
              {article.heading}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default NavBar;
