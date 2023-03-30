// Import Engine
import React from "react";

// Import Components
import Button from "../../../../components/UI/button/button";
import Input from "../../../../components/UI/input/input";

// Crate Login Page
const Login = () => {
  return (
    <div className="bg-[url('/public/collage-585x391.webp')] h-screen relative flex items-center justify-center z-0 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:flex">
      <div className="bg-[color:var(--main-color)]">
        <div className="flex flex-col p-8 h-[300px] justify-between">
          <div className="flex flex-col text-[#fff] mb-2">
            <h2 className="text-[40px] ">taekstock</h2>
            <span>Connect and share with the people in your life</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="bg-[color:var(--input-color)] rounded-[30px] py-[6px] pr-0 pl-3 text-[#8ea8cc] mb-2"
            />
            <Input
              className="bg-[color:var(--input-color)] rounded-[30px] py-[6px] pr-0 pl-3 text-[#8ea8cc]"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label htmlFor="first">
              <Input
                type="checkbox"
                id="first"
                className="appearance-none h-4 w-4 bg-[color:var(--input-color)]"
              />
            </label>
            <span className="text-[#6b89b1]">Keep me logged in</span>
            <span className="text-[#5688bf]">Forgot your password</span>
          </div>
          <div className="flex items-center w-[230px] justify-between text-[#d4e4ea] my-2 ">
            <Button className="rounded-full bg-[#3e8ce3]">Login</Button>
            <span>Create Your Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exprot Login Page
export default Login;
