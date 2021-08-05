import React from "react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contacts">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
