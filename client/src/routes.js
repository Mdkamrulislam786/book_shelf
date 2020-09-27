import React from "react";
import { Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "./Components/Home/home";
import Layout from "./Hoc/Layout/Layout";
import BookView from "./Components/Books";
import Login from "./Containers/Admin/Login";
import User from "./Components/Admin";
import Auth from "./Hoc/Layout/Auth";
import AddReview from "./Containers/Admin/Add";
import UserPosts from "./Components/Admin/UserPosts";
import EditBook from "./Containers/Admin/Edit";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddReview, true)} />
        <Route
          path="/user/edit-post/:id"
          exact
          component={Auth(EditBook, null)}
        />
        <Route
          path="/user/user-reviews"
          exact
          component={Auth(UserPosts, true)}
        />
        <Route path="/books/:id" exact component={Auth(BookView, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
