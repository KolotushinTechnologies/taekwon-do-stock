import React from "react";
import styles from "./main-page.module.css";

const MainPage = () => {
  return (
    <div>
      <div className={styles.login_background}>
        <div className={styles.login_window}>
          <div className={styles.login_content}>
            <div className={styles.title}>
              <span>taekstock</span>
              <span>Connect and share with the people in your life</span>
            </div>
            <div className={styles.inputs}>
              <input type="text" />
              <input type="text" />
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" name="first"/>
              <label htmlFor="first">Keep me logged in</label>  <span>Forgot your password</span>
            </div>
            <div className={styles.button}>
              <button>Login</button> <span>Create Your Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
