import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Bill from "./Bill";
import ProtectedRoute from "./Context/ProtectedRoute";
import { AuthProvider } from "./Context/useContext";
import "./Bill.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/bill",
        element: (
          <ProtectedRoute>
            <Bill />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function Router() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default Router;