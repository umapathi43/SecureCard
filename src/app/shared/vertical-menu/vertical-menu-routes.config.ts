import { RouteInfo } from "./vertical-menu.metadata";

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    icon: "ft-home",
    class: "has-sub",
    badge: "2",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/dashboard/dashboard1",
        title: "Dashboard 1",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      {
        path: "/dashboard/dashboard2",
        title: "Dashboard 2",
        icon: "ft-arrow-right submenu-icon",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "User Setup",
    icon: "ft-users",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/registration",
        title: "UserRegistration",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
     
    ],
  },
  {
    path: "",
    title: "Card Management",
    icon: "ft-book",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/card-details",
        title: "Card Details",
        icon: "ft-user",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: [],
      },
      
    ],
  },
 
];
