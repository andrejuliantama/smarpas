/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/UserDashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import UserList from "views/UserList.jsx";
import History from "views/UserHistory.jsx";
import Typography from "views/Typography.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/user"
  },
  {
    path: "/account",
    name: "Account",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/history",
    name: "History",
    icon: "pe-7s-note2",
    component: History,
    layout: "/user"
  },
  {
    path: "/userlist",
    name: "User List",
    icon: "pe-7s-users",
    component: UserList,
    layout: "/user"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/user"
  },
];

export default dashboardRoutes;
