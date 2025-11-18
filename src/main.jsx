
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import TourListing from './Components/Features/TourListing';
import Details from './Components/details/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
    element: <Home></Home>,
      },
      {
        path:"/fea",
        Component:TourListing,
      },
      {
        path:"/toursData/:id",
        loader:()=>fetch("/TourData.json"),
        Component:Details,
      },
      {
        path:"/blog",
        Component:Blog,
      },
      
      {
        path:"/about",
        Component:About,
      },
      {
        path:"/contact",
        Component:Contact,
      },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

