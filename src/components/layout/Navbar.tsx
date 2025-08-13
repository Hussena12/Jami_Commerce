import React from "react";
import { ModeToggle } from "../theme/theme-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="text-2xl">logo</div>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
