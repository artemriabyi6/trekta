import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App.jsx'; // Тут Lenis
import HomePage from './pages/homePage/HomePage.jsx';
import ContactPage from './pages/contactPage/ContactPage.jsx';
import PricePage from './pages/pricePage/PricePage.jsx';
import ProjectsPage from './pages/projectsPage/ProjectsPage.jsx';
import FormPage from './pages/formPage/FormPage.jsx';

import './styles/global.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="price" element={<PricePage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="form" element={<FormPage />} />
    </Route>
    </>
  ),
   {
    basename: '/trekta'
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
