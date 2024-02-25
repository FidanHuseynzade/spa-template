import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
];