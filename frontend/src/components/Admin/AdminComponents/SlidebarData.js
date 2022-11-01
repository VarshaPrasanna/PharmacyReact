import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },

    {
        title: "Products",
        path: "/Manageproducts",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Users",
        path: "/ManageUsers",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Messages",
        path: "/ManageMessages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },
    {
        title: "Orders",
        path: "/ManageOrders",
        icon: <IoIcons.IoIosCash />,
        cName: "nav-text"
    },
    {
        title: "Prescription",
        path: "/Prescription",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
];
