import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default function Main() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
