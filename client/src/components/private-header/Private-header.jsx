//Import React Engine
import React from "react";

//Import Input 
import Input from "../UI/input/input";

//Create Private Header
const PrivateHeader = () => {
  return (
    <div className="bg-[black] text-[#fff] flex justify-between items-center p-3">
      <div className="w-full max-w-2xl ">
        <ul className="flex justify-between items-center">
          <li className="text-[25px]">Hi Samantha</li>
          <li>View All</li>
          <li>Close Friends</li>
          <li>Collegues</li>
        </ul>
      </div>
      <div className="w-full max-w-xs">
        <ul className="flex justify-between items-center">
          <li>Status</li>
          <li>
            <Input className="rounded-[0] bg-[#292931] px-5 py-1" style={{ boxShadow: "" }} placeholder="Whats on your mind" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivateHeader;
