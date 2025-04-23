import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Booking from "../pages/Booking";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <p>Loading , please wait ... </p>,
        loader: () => fetch('../doctor.json'),
      },
      {
        path: "/Booking",
        Component: Booking,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/doctor-details/:id",
        element: <Details />,
        loader: () => fetch('../doctor.json'),
      },
    ],
  },
]);