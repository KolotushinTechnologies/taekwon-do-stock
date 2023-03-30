//Import React Engine
import React from "react";

//Import Header Component
import Header from "../../../../components/header/header";
//Import About Header Component
import AboutHeader from "../../../../components/private-header/about-header";

//Import Button Component
import Button from "../../../../components/UI/button/button";

//Create AboutPage
const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutHeader />
      <div className="flex">
        <div>
          <img className="h-full" src="/krasnoe-selo.orig.jpg" alt="" />
        </div>
        <div className="bg-[#1c1d22] flex flex-col items-start px-12 pt-10 pb-28">
          <h2 className="text-[#fff] text-[40px]">About Melissa</h2>
          <p className="text-[#fff] mt-5">Basic Info</p>
          <div className="flex text-[#5f6065] mb-5">
            <div className="flex flex-col mr-3">
              <span>Birthday</span>
              <span>Sex</span>
              <span>Interested in</span>
              <span>Relationship Status</span>
              <span>Anniversary</span>
            </div>
            <div className="flex flex-col">
              <span>December 26th</span>
              <span>Female</span>
              <span>Men</span>
              <span>Engaged to John Smith</span>
              <span>July 23, 2010</span>
            </div>
          </div>
          <div className="flex text-[#5f6065] mb-8">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit magni tempora nemo amet, porro mollitia sed est
              ipsum vero commodi ullam saepe id possimus nihil, quidem eligendi
              ducimus, laborum asperiores ratione! Minus nihil, porro hic nam
              cum eveniet libero asperiores quo consequuntur numquam, quos
              aliquam cumque pariatur incidunt nobis maiores!Reprehenderit magni
              tempora nemo amet, porro mollitia sed est ipsum vero commodi ullam
              saepe id possimus nihil, quidem eligendi ducimus, laborum
              asperiores ratione! Minus nihil, porro hic nam cum eveniet libero
              asperiores quo consequuntur numquam, quos aliquam cumque pariatur
              incidunt nobis maiores!
            </span>
          </div>
          <div className="flex flex-col text-[#5f6065]">
            <h2 className="text-[#fff]">Sample Heading</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nihil, sapiente numquam autem quae doloribus a eos. Ullam impedit
              voluptatem reprehenderit in doloremque iusto repudiandae quia
              sequi eaque quidem sapiente, explicabo quas assumenda odio,
              commodi dolorem magni at, fugiat harum quaerat maiores ut illum
              fugit maxime. Expedita iure dolorum veniam.
            </span>
          </div>
        </div>
        <div className="flex flex-col pt-12 bg-[#1c1d22] items-start ">
          <div className="border-l-2 border-black px-5 max-h-[814px] h-full">
            <div>
              <img src="/nature.jpg" alt="" />
            </div>
            <div className="flex flex-col text-[#5f6065] mt-[30px]">
              <span>Lives in</span>
              <span>Stockholm, Sweden</span>
              <span>Born on</span>
              <span>November 20, 1984</span>
              <span>In a Relationship</span>
            </div>
            <div className="flex flex-col max-h-[140px] mt-[30px] h-full justify-between">
              <span className="text-[#fff]">
                Friends <span className="text-[#5f6065]">(521)</span>
              </span>
              <span className="text-[#fff]">
                Photos <span className="text-[#5f6065]">(3213)</span>
              </span>
              <span className="text-[#fff]">
                Likes <span className="text-[#5f6065]">(21)</span>
              </span>
              <span className="text-[#fff]">
                Subscriptions <span className="text-[#5f6065]">(3)</span>
              </span>
            </div>
            <div className="flex flex-col text-[#5f6065] mt-[30px]">
              <span className="text-[#fff]">My Account</span>
              <span>Adventise on Taekstock</span>
              <span>Account Settings</span>
              <span>Privacy Settings</span>
            </div>
          </div>
          <div>
            <Button className="bg-black text-[#fff]">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
