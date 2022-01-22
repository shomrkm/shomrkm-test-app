import { useRoutes } from 'react-router-dom';

import { Map } from '../features/map';
import { Dashboard, NotFound } from '../features/misc';

export const AppRoutes = () => {
  const element = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: 'map', element: <Map /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
};
