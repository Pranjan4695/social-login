import FacebookLogin from "react-facebook-login";
import React from "react";

const FacebookLogIn = () => {
  const responseFacebook = (response) => {
    console.log("result", response);
  };
  const componentClicked = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <FacebookLogin
        appId="622892015368686"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </>
  );
};
export default FacebookLogIn;
