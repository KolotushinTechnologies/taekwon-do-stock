//Import Engine
import React from "react";

// Import Header Component
import Header from "../../../components/header/header";

//Import Private Header Component
import PrivateHeader from "../../../components/private-header/Private-header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <PrivateHeader />
      <div>
        <div className="grid grid-cols-3 grid-flow-col">
          <div>
            <img src="/BMW-3-Series-Exterior.webp" alt="" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 ">
            <img
              src="/fc97db329bd4482025eaa1e3961dc80e.jpeg"
              className="h-full"
              alt=""
            />
            <div className="bg-[color:var(--main-color)]"></div>
            <div className="bg-[color:var(--main-color)]"></div>
            <img src="/toyota.webp" className="h-full" alt="" />
          </div>
          <div className="grid grid-rows-2">
            <img src="/nature.jpg" alt="" />
            <div className="bg-[#fff]"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-flow-col">
          <div className="grid grid-rows-2">
            <div className="bg-[#fff]"></div>
            <div className="grid grid-cols-2">
              <div className="bg-[color:var(--main-color)]"></div>
              <img src="/krasnoe-selo.orig.jpg" className="h-full" alt="" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <img src="/nature.jpg" alt="" />
            <div className="bg-[#fff]"></div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="bg-[color:var(--main-color)]"></div>
            <img src="/toyota.webp" className="h-full" alt="" />
            <img src="/BMW-3-Series-Exterior.webp" className="h-full" alt="" />
            <div className="bg-[#fff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
