import React from "react";
import Button from "../../../../components/UI/button/Button";
import Input from "../../../../components/UI/input/Input";

const Login = () => {
  return (
    <div className="bg-[url('/public/collage-585x391.webp')] h-screen relative flex items-center justify-center z-0 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:flex">
      <div className="bg-[#365d98]">
        <div className="flex flex-col p-8 h-[300px] justify-between">
          <div className="flex flex-col text-[#fff] mb-2">
            <h2 className="text-[40px] ">taekstock</h2>
            <span>Connect and share with the people in your life</span>
          </div>
          <div className="flex flex-col">
            <Input
              className="bg-[#2a4773] rounded-[30px] py-[6px] pr-0 pl-3 text-[#8ea8cc] mb-2"
              style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}
            />
            <Input
              className="bg-[#2a4773] rounded-[30px] py-[6px] pr-0 pl-3 text-[#8ea8cc]"
              style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label htmlFor="first">
              <Input
                type="checkbox"
                id="first"
                className="appearance-none h-3 w-3 bg-[#2a4773]"
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

export default Login;
