import GoogleLogin from "react-google-login";
import React from "react";

const GoogleLogIn = () => {
  const responseGoogle = (response) => {
    console.log("result", response);
  };

  return (
    <>
      <GoogleLogin
        clientId="550609336905-kb8if2fe5r08jkkjhlv5cnmkd654pakp.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
export default GoogleLogIn;
