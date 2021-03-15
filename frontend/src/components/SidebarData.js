import React from "react";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "PRODUCT",
    path: "/product",
    icon: <RiIcons.RiDashboardFill />,
    cName: "nav-text",
  },
  {
    title: "LOCATION",
    path: "/location",
    icon: <ImIcons.ImBooks />,
    cName: "nav-text",
  },
  {
    title: "MOVEMENT",
    path: "/movement",
    icon: <GiIcons.GiAchievement />,
    cName: "nav-text",
  },
  // {
  //   title: "FORUM",
  //   path: "/forum",
  //   icon: <MdIcons.MdForum />,
  //   cName: "nav-text",
  // },
];
