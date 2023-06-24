import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
  ]);

    export default router;