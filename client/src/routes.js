import React from "react";
import { Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "./Components/Home/home";
import Layout from "./Hoc/Layout/Layout";
import BookView from "./Components/Books";
import Login from "./Containers/Admin/Login";
import User from "./Components/Admin";
import Auth from "./Hoc/Layout/Auth";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
        <Route path="/user" exact component={Auth(User, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
