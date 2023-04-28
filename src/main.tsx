import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/tailwind.css";
import Header from "./components/Header";
import LandingPage from "./routes/LandingPage";
import About from "./routes/About";
import Projects from "./routes/Projects";
import ContactMe from "./routes/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/contactme",
    element: <ContactMe/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="o-container bg-slate-900 min-h-screen min-w-screen">

        <RouterProvider router={router}/>

    </div>
  </React.StrictMode>
);
