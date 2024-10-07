import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_ABOUT_US, ROUTE_COMPONENTS, ROUTE_HOME } from '../routes';
import { Header } from '../layouts';
import { AboutUs, ComponentsPage, Home, NotFound } from '../pages';

const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTE_HOME,
        element: <Home />,
      },
      {
        path: ROUTE_COMPONENTS,
        element: <ComponentsPage />,
      },
      {
        path: ROUTE_ABOUT_US,
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
