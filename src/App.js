import React from 'react';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Layout from './Component/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';

function App() {
  let routers = createBrowserRouter( [
    { path: '', element: <Layout/> , children: [
      {index: true, element: <Home/>},
      {path:"about", element: <About/>},
      {path:"portfolio", element: <Portfolio/>},
      {path:"contact", element: <Contact/>},
      {path:"*", element: <NotFound/>}
    ]},
  ]);
  return <RouterProvider router={routers}></RouterProvider>

}

export default App;
