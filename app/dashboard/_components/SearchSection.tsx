import { Search } from "lucide-react";
import React from "react";

type Props = {};

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-10 bg-gradient-to-r from-rose-400 to-red-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border my-5 w-[50%] bg-white rounded-lg">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent text-rose-700 w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
