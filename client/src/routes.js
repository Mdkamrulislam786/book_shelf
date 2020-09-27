import React from "react";
import { Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "./Components/Home/home";
import Layout from "./Hoc/Layout/Layout";
import BookView from "./Components/Books";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books/:id" exact component={BookView} />
      </Switch>
    </Layout>
  );
};

export default Routes;
