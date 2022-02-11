import { useRoutes } from 'react-router-dom';

import { Map } from '@/features/map';
import { Dashboard, NotFound, Sandbox } from '@/features/misc';

export const AppRoutes = () => {
  const element = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'map', element: <Map /> },
    { path: 'sandbox', element: <Sandbox /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
};
