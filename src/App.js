import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "utils/Styles/GlobalStyles";
import { lightTheme, darkTheme } from "utils/Styles/Themes";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">hello</div>;
      <button
        type="primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {" "}
        toggle
      </button>
    </ThemeProvider>
  );
}

export default App;
