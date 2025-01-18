"use client";

import { magnifyingGlassIcon } from "@/asserts/icons/icons";
import { InputChangeEvent } from "@/types/global";
import Input from "../../form/Input";
import { useState } from "react";

export default function SearchBox() {
  const [searchData, setSearchData] = useState<string>();
  const searchHandler = (event: InputChangeEvent) => {
    const searchValue = event.target.value;
    setSearchData(searchValue);
    console.log("search data ", searchValue);
  };
  const handleClickSearch = () => {
    console.log("search click data ", searchData);
  };

  return (
    <div className="min-w-80 flex items-center justify-center border border-[#02220529] bg-white rounded-full p-1">
      <Input
        name="searchField"
        placeholder="Zoeken..."
        onChange={searchHandler}
        className="rounded-s-full border-0 py-2 px-[18px]"
      />

      <span
        onClick={handleClickSearch}
        className="bg-primary rounded-full p-1 text-white"
      >
        {magnifyingGlassIcon}
      </span>
    </div>
  );
}
