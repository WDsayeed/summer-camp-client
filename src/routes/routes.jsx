import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Register from "../components/Pages/Home/Registration/Register";
import Login from "../components/Pages/Home/Login/Login";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../components/Pages/Dashboard/MySelectedClasses";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Instructor from "../components/Pages/Instructor/Instructor";
import Classes from "../components/Pages/Classes/Classes";
import ManageUsers from "../components/Pages/Dashboard/ManageUsers";
import Manageclasses from "../components/Pages/Dashboard/Manageclasses";
import EnrolledClass from "../components/Pages/Dashboard/EnrolledClass";
import AddClass from "../components/Pages/Dashboard/AddClass";
import MyClass from "../components/Pages/Dashboard/MyClass";
import AdminRoute from "./AdminRoute";
import Payment from "../components/Pages/Dashboard/payment/Payment";
import PaymentHistory from "../components/Pages/Dashboard/payment/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'instructors',
        element:<Instructor></Instructor>
      },
      {
        path:'classes',
        element:<Classes></Classes>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      },

    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'myselectedclass',
        element:<MySelectedClasses></MySelectedClasses>
      },
      {
        path:'myenrolledclass',
        element:<EnrolledClass></EnrolledClass>
      },
      {
        path:'payment/:id',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // instructor route
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'myclass',
        element:<MyClass></MyClass>
      },
      // admin route
      {
        path:'manageusers',
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path:'manageclasses',
        element:<AdminRoute><Manageclasses></Manageclasses></AdminRoute>
      }
    ]
  }
]);
