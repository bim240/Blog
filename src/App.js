import ArticleSection from "Components/ArticleSection";
import Header from "Components/Header";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "utils/Styles/GlobalStyles";
import { lightTheme, darkTheme } from "utils/Styles/Themes";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} theme={theme} />
      {/* <NavBar theme={theme} /> */}
      <ArticleSection theme={theme} />
    </ThemeProvider>
  );
}

export default App;
