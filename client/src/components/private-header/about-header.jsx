//Import React Engine
import React from "react";

//Create About Header
const AboutHeader = () => {
  return (
    <div className="bg-[black] text-[#fff] flex justify-between items-center p-3">
      <div className="w-full max-w-2xl ">
        <ul className="flex justify-between items-center">
          <li className="text-[25px]">Melissa Adams</li>
          <li>Timeline</li>
          <li>About</li>
          <li>Photos</li>
          <li>Likes</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="w-full max-w-xs">
        <ul className="flex justify-between items-center text-[30px]">
          <li>About Friend</li>
          <li>Message</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutHeader;
