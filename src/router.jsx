import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import MainLayout from "../Components/MainLayout";
import Registration from "../Components/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default router;
