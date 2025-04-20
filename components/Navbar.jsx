import React from "react";
import appIcon from "../src/assets/appIcon.png";
import DownloadBtn from "./downloadBtn";
const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between p-5 mt-4">
      <div className="flex flex-row items-center">
        <h1 className="font-bold text-xl">NaniMusic</h1>
        <img src={appIcon} className="w-[50px] h-[50px]" />
      </div>
      <DownloadBtn />
    </div>
  );
};

export default Navbar;
