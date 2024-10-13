import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_ABOUT_US, ROUTE_COMPONENTS, ROUTE_HOME } from '../routes';
import { AboutUs, ComponentsPage, Home, NotFound } from '../pages';
import { Main } from '../layouts';

const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <Main />,
    errorElement: (
      <Main>
        <NotFound />
      </Main>
    ),
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
