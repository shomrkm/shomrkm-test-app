import { useRoutes } from 'react-router-dom';

import { Map } from '@/features/map';
import { Dashboard, NotFound } from '@/features/misc';
import { Todos } from '@/features/todos';

export const AppRoutes = () => {
  const element = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'map', element: <Map /> },
    { path: 'todos', element: <Todos /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
};
