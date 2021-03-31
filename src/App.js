import ArticleSection from "Components/ArticleSection";
import Footer from "Components/Footer";
import Header from "Components/Header";
import { useState } from "react";
import { Route } from "react-router";
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
      {/* <NavBar theme={theme} /> */}
      <Route>
        <ArticleSection
          theme={theme}
          setSelectedArticle={setSelectedArticle}
          selectedArticle={selectedArticle}
        />
      </Route>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
