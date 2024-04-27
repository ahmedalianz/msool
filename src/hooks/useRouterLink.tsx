import { Home } from '@pages';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const useRouterLinks = () => {
  const routerObjects: RouteObject[] = [
    {
      path: '/',
      element: <Home/>,
    },
  ];
  const router = createBrowserRouter(routerObjects);

  return { router };
};
