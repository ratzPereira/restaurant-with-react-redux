import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
