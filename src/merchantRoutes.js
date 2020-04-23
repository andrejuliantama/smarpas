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
import Dashboard from "views/MerchantDashboard.jsx";
import MerchantProfile from "views/MerchantProfile.jsx";

import History from "views/MerchantHistory.jsx";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/merchant"
  },
  {
    path: "/account",
    name: "Account",
    icon: "pe-7s-user",
    component: MerchantProfile,
    layout: "/merchant",
  },
  {
    path: "/history",
    name: "History",
    icon: "pe-7s-note2",
    component: History,
    layout: "/merchant"
  },
];

export default dashboardRoutes;
