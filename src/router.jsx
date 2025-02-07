import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import JobDetailes from "../Components/JobDetailes";
import Login from "../Components/Login";
import MainLayout from "../Components/MainLayout";
import Registration from "../Components/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      {
        path: "/jobs/:id",
        element: <JobDetailes />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/jobs/${params.id}`
          );
          if (!response.ok) throw new Error("Job not found");
          return response.json();
        },
      },
    ],
  },
]);

export default router;
