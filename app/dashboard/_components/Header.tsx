import { Search } from "lucide-react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-[1.15rem] shadow-sm border-b-2 flex justify-between items-center bg-emerald-50">
      <div className="flex gap-2 items-center p-2 border rounded-mdmax-w-md">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-emerald-50"
        />
      </div>
      <div>
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          Join Membership for 20₹ /Month
        </h2>
      </div>
    </div>
  );
};

export default Header;
