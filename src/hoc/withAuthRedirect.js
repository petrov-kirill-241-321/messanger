import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function withAuthRedirect(Component) {
  return function WrappedComponent(props) {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        // navigate("/login");
      }
    }, [isAuth, navigate]);

    return isAuth ? <Component {...props} /> : null;
  };
}
