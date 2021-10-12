import React from "react";
import { GoogleLogin } from "react-google-login";
// import { googleLogin } from "../actions/authAction";
import { AiOutlineGoogle } from "react-icons/ai";

const apiKey =
  "1045330239037-vsgml53lumroodg3h4aec902pf6kdqq6.apps.googleusercontent.com";
export default function Google() {
  // const dispatch = useDispatch();
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    // dispatch(googleLogin({ tokenId: response.tokenId }));
  };

  return (
    <div>
      <GoogleLogin
        clientId={apiKey}
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
