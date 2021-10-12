import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleLogin } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Google() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const responseGoogle = (response) => {
    dispatch(googleLogin({ tokenId: response.tokenId }));
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_TOKEN_ID}
        render={(renderProps) => (
          <button
            className="p-2 border mr-3 rounded-full"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <div>
              <AiOutlineGoogle size={20} color="#828282" />
            </div>
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}
