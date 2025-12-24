import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './paths';
import Home from '../pages/Home';
import Tourism from '../pages/tourism';
import Events from '../pages/Events';
import CultureHeritage from '../pages/CultureHeritage';
import TripPlanning from '../pages/TripPlanning';
import Contact from '../pages/Contact';
import LoginPage from '../features/auth-ui/Login/LoginPage';
import RegisterPage from '../features/auth-ui/Register/RegisterPage';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Blog from '../pages/Blog';
import Faq from '../pages/Faq';
import HelpCenter from '../pages/Helpcenter';
import About from '../pages/About';
import NotFound from '../error-page/NotFound';

export const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Home />,
    },
    {
        path: PATHS.TOURISM,
        element: <Tourism />,
    },
    {
        path: PATHS.EVENTS,
        element: <Events />,
    },
    {
        path: PATHS.CULTURE,
        element: <CultureHeritage />,
    },
    {
        path: PATHS.TRIP_PLANNING,
        element: <TripPlanning />,
    },
    {
        path: PATHS.CONTACT,
        element: <Contact />,
    },
    {
        path: PATHS.LOGIN,
        element: <LoginPage />,
    },
    {
        path: PATHS.REGISTER,
        element: <RegisterPage />,
    },
    {
        path: PATHS.PRIVACY,
        element: <Privacy />,
    },
    {
        path: PATHS.TERMS,
        element: <Terms />,
    },
    {
        path: PATHS.BLOG,
        element: <Blog />,
    },
    {
        path: PATHS.FAQ,
        element: <Faq />,
    },
    {
        path: PATHS.HELP_CENTER,
        element: <HelpCenter />,
    },
    {
        path: PATHS.ABOUT,
        element: <About />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
