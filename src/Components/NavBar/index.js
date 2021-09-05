import { Menu } from 'antd';
import { useState } from 'react';
import allData, { getIcon } from 'Data';
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

const NavBar = (props) => {
  const { theme, className, setSelectedArticleId, setShowNavBar, selectedArticleId } = props;
  const currentLocation = props.location.pathname !== '/' ? props.location.pathname : false;
  const [selectedKey, setSelectedKey] = useState(selectedArticleId || currentLocation);

  const handleSelectedKeyChange = ({ key }) => {
    setSelectedKey(key);
    setSelectedArticleId(key);
    setShowNavBar && setShowNavBar();
    props.history.push(`/${key}`);
  };

  return (
    <Menu
      theme={theme}
      onClick={handleSelectedKeyChange}
      selectedKeys={selectedKey}
      className={className}
      mode='inline'>
      {Object?.entries(allData)?.map(([languageName, data], index1) => {
        return (
          <SubMenu key={`sub${index1 + 1}`} icon={getIcon(data.name)} title={data.name}>
            {data?.articles?.map((article, index2) => (
              <Menu.Item key={article.id}>{article.heading}</Menu.Item>
            ))}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default withRouter(NavBar);
