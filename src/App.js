import ArticleSection from "Components/ArticleSection";
import Footer from "Components/Footer";
import Header from "Components/Header";
import { useState } from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "utils/Styles/GlobalStyles";
import { lightTheme, darkTheme } from "utils/Styles/Themes";

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedArticle, setSelectedArticle] = useState({});

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        setSelectedArticle={setSelectedArticle}
        selectedArticle={selectedArticle}
      />
      <Switch>
        <Route path="*">
          <ArticleSection
            theme={theme}
            setSelectedArticle={setSelectedArticle}
            selectedArticle={selectedArticle}
          />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
