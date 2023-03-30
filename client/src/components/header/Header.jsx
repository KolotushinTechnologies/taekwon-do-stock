import React from "react";
import Input from "../UI/input/input";

const Header = () => {
  return (
    <header className="bg-[color:var(--main-color)] flex justify-between p-4 items-center sticky top-0">
      <div className="w-full max-w-5xl">
        <ul className="flex text-[#fff] justify-between items-center">
          <li className="text-[30px]">taekstock</li>
          <li>News</li>
          <li>Messages</li>
          <li>Events</li>
          <li>Photos</li>
          <li>Find Friends</li>
        </ul>
      </div>
      <div className="w-full max-w-xs">
        <ul className="flex text-[#fff] justify-between items-center">
          <li>Find Friends</li>
          <li>
            <Input type="search" placeholder="Search" className="bg-[color:var(--input-color)] rounded-[30px] px-3 py-2 text-[#8ea8cc]" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
