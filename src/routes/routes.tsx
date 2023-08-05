import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../components/BookDetails';
import AddBooks from '../pages/AddBooks';
import Cart from '../components/Cart';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/AllBooks',
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: (
          <BookDetails
          />
        ),
      },
      {
        path: "/addbooks",
        element: (
          <AddBooks />
        ),
      },
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;