import React from "react";
import FacebookLogIn from "./Facebook";
import GoogleLogIn from "./Google";

const App = () => {
  return (
    <>
      <div className="main_div">
        <h1>Social-Media-LogIn</h1>
        <br />
        <br />
        <FacebookLogIn />
        <br />
        <GoogleLogIn />
      </div>
    </>
  );
};
export default App;
