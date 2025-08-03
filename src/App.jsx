import About from './companents/About/About';
import Home from './companents/Home/Home';
import Navbar from './companents/Navbar/Navbar';

import Portfolio from './companents/Portfolio/Portfolio';
import Contact from './companents/Contact/Contact';
import Footer from './companents/Footer/Footer';
import Layout from './companents/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './companents/NotFound/NotFound';


let router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Portfolio', element: <Portfolio /> },
      { path: 'Contact', element: <Contact /> },
      {path: '*', element: <NotFound /> },
    ],
  },
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} > </RouterProvider >
      
    </>
  );
}

export default App;
