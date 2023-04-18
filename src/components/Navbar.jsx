import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
    // <div className="flex w-auto bg-gray-400">
    //   <div className="text-xl w-1/2 text-right p-5 pr-10 cursor-pointer hover:text-amber-500 hover:underline ">
    //     left
    //   </div>
    //   <div className="text-xl w-1/2 text-left p-5 pl-10 cursor-pointer hover:text-amber-500">
    //     right
    //   </div>
    // </div>
  );
}

export default Navbar;
