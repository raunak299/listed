import { useLocation } from "react-router-dom";
import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const location = useLocation();
  console.log(location);
  const login = localStorage.getItem("user");
  const children = props.children;

  return (
    <React.Fragment>
      {login ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/authentication",
            state: { from: location },
          }}
        />
      )}
    </React.Fragment>
  );
};

export default PrivateRoute;
