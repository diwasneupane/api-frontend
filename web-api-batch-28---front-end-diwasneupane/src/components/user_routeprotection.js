import { Navigate } from "react-router-dom";


function PrivateRouteUser({ children }) {
    var isAuth;
  if(localStorage.getItem('userticket')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRouteUser;