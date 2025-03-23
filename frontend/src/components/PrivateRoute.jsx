import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  // console.log("Inside PrivateRoute, Token Found:", token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
