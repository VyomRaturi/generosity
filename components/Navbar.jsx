import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="fixed p-4 flex gap-4 mx-auto top-10 w-[90vw] bg-white z-10 left-0 right-0 m-auto rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-15 border border-gray-400">
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
      </div>
    </div>
  );
};

export default Navbar;
