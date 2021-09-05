import ArticleSection from 'Components/ArticleSection';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'utils/Styles/GlobalStyles';
import { lightTheme, darkTheme } from 'utils/Styles/Themes';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedArticleId, setSelectedArticleId] = useState();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        setSelectedArticleId={setSelectedArticleId}
        selectedArticleId={selectedArticleId}
      />
      <Switch>
        <Route path='*'>
          <ArticleSection
            theme={theme}
            setSelectedArticleId={setSelectedArticleId}
            selectedArticleId={selectedArticleId}
          />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
