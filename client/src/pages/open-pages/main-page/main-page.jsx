import React from "react";
// import styles from "./main-page.module.css";

const MainPage = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <span>taekstock</span>
              <span>Connect and share with the people in your life</span>
            </div>
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="checkbox" id="first"/>
              <label htmlFor="first">Keep me logged in</label>  <span>Forgot your password</span>
            </div>
            <div>
              <button>Login</button> <span>Create Your Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
