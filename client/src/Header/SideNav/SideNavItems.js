import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

const SideNavItems = () => {
  const items = [
    {
      type: "navItem",
      icon: "home",
      text: "Home",
      link: "/",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "MyProfile",
      link: "/user",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Add Admins",
      link: "/user/register",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Login",
      link: "/login",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "My Reviews",
      link: "/user/user-reviews",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Add Reviews",
      link: "/user/add",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Logout",
      link: "/user/logout",
      restricted: false,
    },
  ];
  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesome name={item.icon}>{item.text}</FontAwesome>
      </Link>
    </div>
  );
  const showItems = () => {
    return items.map((item, i) => {
      return element(item, i);
    });
  };
  return <div>{showItems()}</div>;
};

export default SideNavItems;
