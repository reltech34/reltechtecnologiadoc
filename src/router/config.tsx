import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Servicos from '../pages/servicos/page';
import Projetos from '../pages/projetos/page';
import Contato from '../pages/contato/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/servicos',
    element: <Servicos />,
  },
  {
    path: '/projetos',
    element: <Projetos />,
  },
  {
    path: '/contato',
    element: <Contato />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
