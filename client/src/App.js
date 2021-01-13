import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/home";
import DetailView from "./views/detail";
import NavigationBar from "./components/navigation-bar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { blue, indigo } from '@material-ui/core/colors';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkTheme ? "dark" : "light",
          primary: blue,
          secondary: indigo
        },
      }),
    [darkTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div>
          <NavigationBar handleTheme={handleTheme} isDark={darkTheme} />
          <Switch>
            <Route exact path={"/"} component={HomeView} />
            <Route path={"/details/:id"} component={DetailView} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
