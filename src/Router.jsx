import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Bill from "./Bill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/bill",
    element: <Bill />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;