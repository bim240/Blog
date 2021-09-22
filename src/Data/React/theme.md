# Theme implementation

### Package to install
**For yarn**
- ` yarn add styled-components`

**For npm**
- `npm install styled-components`

***

Create a folder named `utils` inside the `src` folder. Inside the `utils` folder creates a file `theme.js` and paste the code below.

```js
export const lightTheme = {
  body: "#f3f3f3",
  text: "#2c2c2c",
  background: "#f3f3f3",
  secondaryBackground: "#FFFFFF",
  articleBackground: "#FAFAFA",
};
export const darkTheme = {
  body: "#000205",
  text: "#fff",
  secondaryText: "#a7a7a7;",
  background: "#000205",
  secondaryBackground: "#061529",
  articleBackground: "#030C17",
};
```
Now go to `app.js` file. Import `ThemeProvider`, `lightTheme` and `darkTheme` respectively.

```js 
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';
```

Create a state to store the current theme for the web app. We will use `useState` for storing our theme as it will trigger re-render on change.

```js
 const [theme, setTheme] = useState('light');
```
In `return` statement of `app.js` file, remove everything and paste the following code.

```js
 <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <button> text </button>
 </ThemeProvider>
```

Now, let's add an event listener to the button. When clicked on the button,
we will toggle the theme. `app.js` would look like 

```js

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}> text </button>
    </ThemeProvider>
  );
}

export default App;

```
*If you are using react version < 17 then import `React` from react.*

As you can see nothing is happening even after clicking on the button. There is one small thing that is remaining. Import `styled` from `styled-components`

```js
import styled from "styled-components";
```

Style the button tag in the following way. (*I am doing it in the app.js file for the article but you can move this to the component folder.*)

```js
const StyledButton = styled.button`
 background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.text};
  border:none;
  outline: none;
  padding: 50px;
  margin: 200px;
  border: 1px solid lightgray;
  transition: all 400ms;`;
```
*To know more about `styled-components`, visit their official website https://styled-components.com.*

Replace \
`<button onClick={toggleTheme}> text </button>`\
with \
` <StyledButton onClick={toggleTheme}> text </StyledButton>`

Now when you click on the button you can see the color and background of the button changes. This way we can propagate the theme change in every section of web app.

Thank you, See you in the next article.🥳
