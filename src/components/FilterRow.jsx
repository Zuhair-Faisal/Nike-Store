import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import FilterItem from "./FilterItem";

const FilterRow = (props) => {
  const filters = [
    "Newest",
    "Highest Rated",
    "Price Low to High",
    "Price High to Low",
  ];

  return (
    <div className="pb-6 mb-6 border-b-[1px] flex items-center justify-between">
      <h3 className="text-lg font-bold text-black">Shoes & Sneakers</h3>
      <ul className="flex items-center gap-x-8 text-sm text-black">
        {filters.map((filter, index) => (
          <FilterItem
            selectedFilter={props.selectedFilter}
            handleFilterClick={props.handleFilterClick}
            filter={filter}
            key={index}
          />
        ))}
      </ul>
      <h3
        className="flex items-center gap-x-2 text-black text-md cursor-pointer"
        onClick={() => window.alert("Your Mail Has Been Sent")}
      >
        <IoMdMail /> Mail Us! <HiArrowRight />
      </h3>
    </div>
  );
};

export default FilterRow;
