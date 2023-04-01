import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/tailwind.css";
import Header from "./components/Header";
import LandingPage from "./routes/LandingPage";
import About from "./routes/About";
import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="o-container">

        <RouterProvider router={router}/>

    </div>
  </React.StrictMode>
);
