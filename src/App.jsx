import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import Layout from "./assets/components/Layout/Layout";
import About from "./assets/components/About/About";
import Portfolio from "./assets/components/Portfolio/Portfolio";
import Contact from "./assets/components/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;
