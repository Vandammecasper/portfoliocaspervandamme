import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import "./assets/styles/screen.scss";
// import Header from "./components/Header";
import LandingPage from "./routes/LandingPage";
// import About from "./routes/About";
// import Skills from "./routes/Skills";
// import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
//   {
//     path: "/About",
//     element: <About/>,
//   },
//   {
//     path: "/Skills",
//     element: <Skills/>,
//   },
//   {
//     path: "/Projects",
//     element: <Projects/>,
//   }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="o-container">

        {/* <Header/> */}

        <RouterProvider router={router}/>

    </div>
  </React.StrictMode>
);
