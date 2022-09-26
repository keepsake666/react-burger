import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { FC, ReactNode } from "react";

interface IProtectedRoute {
  children: ReactNode;
  rest?: any;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector(
    (state) => state.authorizationReducer
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
