import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@theme/index";
import reboot from "@styles/reboot";
import fontInter from "@styles/fontInter";
import { useRoutes } from "routes";
import useAuth from "@hooks/useAuth";
import UserContext from "context/UserContext";

import "destyle.css/destyle.css";

function App(): JSX.Element {
  const { user, login, register, logout, loading, error } = useAuth();

  const routes = useRoutes();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, login, register, logout, loading, error }}>
          <Global styles={[reboot, fontInter]} />
          {routes}
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
