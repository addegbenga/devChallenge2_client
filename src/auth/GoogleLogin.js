import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleLogin } from "../actions/authAction";
import { useDispatch } from "react-redux";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Google() {
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    console.log(response);
    dispatch(googleLogin({ tokenId: response.tokenId }));
  };

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
