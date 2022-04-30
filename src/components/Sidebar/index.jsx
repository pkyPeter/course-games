import React from "react";
import { NavLink } from "react-router-dom";

const getNavLinkClassNames = ({ isActive }) => {
  let classNames = "py-2 px-3 ";
  if (isActive) classNames += "border-b-2	border-main-green";
  return classNames;
};

const Sidebar = () => {
  const tabs = [
    {
      to: "/",
      label: "首頁",
    },
    {
      to: "guess",
      label: "猜猜看",
    },
    {
      to: "matches",
      label: "找出一對",
    },
  ];
  return (
    <div className="flex gap-[0.3rem] py-2 pl-6">
      {tabs.map((tab) => {
        return (
          <NavLink key={tab.to} className={getNavLinkClassNames} to={tab.to}>
            {tab.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
