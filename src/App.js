import React from "react";
import "./App.css";
import BadgeNew from "./pages/BadgeNew";
import BadgeEdit from "./pages/BadgeEdit";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
