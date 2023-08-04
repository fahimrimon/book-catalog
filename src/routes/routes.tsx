import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../components/BookDetails';

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
            _id={""}
            image={""}
            name={""}
            author={""}
            genre={""}
            publicationYear={""}
            reviews={[]}
          />
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