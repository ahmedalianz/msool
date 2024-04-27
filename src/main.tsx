import { createRoot } from 'react-dom/client';
import 'dayjs/locale/ar-sa.js';
import { RouterProvider } from 'react-router-dom';
import './i18n';
import './index.scss';
import { useRouterLinks } from './hooks/useRouterLink';
import { AllProviders } from './utils/AllProviders';

const container = document.getElementById('root');

const root = createRoot(container!);
const App = () => {
  const { router } = useRouterLinks();

  return <RouterProvider router={router} />;
};

root.render(
  <AllProviders>
    <App />
  </AllProviders>,
);
