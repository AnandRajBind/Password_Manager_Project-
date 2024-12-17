import React from "react"; // rafc for boiler plate code
const Footer = () => {
  return (
    <div className=" bg-slate-600 text-white flex flex-col justify-center items-center  bottom-0 w-full">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>

      <div className=" flex justify-center items-center">
        created with <img className="w-10 mx-2" src="/icons/heart.png" alt="" />
        by Anand Raj Bind
      </div>
    </div>
  );
};

export default Footer;
