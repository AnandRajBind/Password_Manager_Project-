import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-600  ">
      <div className="mycontainer flex justify-between items-center px-4  py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4  text-white">
            <a className="hover:font-bold " href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About{" "}
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
<button className="text-white bg-green-600 my-5 rounded-full flex  justify-between items-center ring-white ring-1"> 
  <img className=" invert-0 p-1 w-10  " src="/icons/github.svg" alt="github logo" />

<span className="font-bold px-2 ">GitHub</span>
</button>
    </div>
    </nav>
  );
};

export default Navbar;
