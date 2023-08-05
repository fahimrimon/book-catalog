/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ReactNode} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;