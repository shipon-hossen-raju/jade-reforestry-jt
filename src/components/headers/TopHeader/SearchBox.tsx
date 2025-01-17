"use client";

import searchIcon from "@/asserts/icons/magnifying-glass-circle--circle-glass.svg";
import { ChangeEvent } from "@/types/global";
import CustomImage from "../../Elements/CustomImage";
import Input from "../../form/Input";

export default function SearchBox() {
  const searchHandler = (event: ChangeEvent) => {
    console.log("search data ", event.target.value);
  };

  return (
    <div className="flex items-center justify-center border border-[#02220529] bg-white rounded-full p-1">
      <Input
        name="searchField"
        onChange={searchHandler}
        className="rounded-s-full border-0 py-2 px-[18px]"
      />
      {/* <div className=" h-10 w-10 flex items-center justify-center"> */}
      <CustomImage
        src={searchIcon}
        alt="Icon"
        width={40}
        height={40}
        className="bg-primary rounded-full p-1"
      />
      {/* </div> */}
    </div>
  );
}
