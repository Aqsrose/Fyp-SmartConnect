import React from "react";

function Search() {
  return (
    <div className="mb-4 pl-32 pt-2 pr-2 md:pl-0 md:pr-0 md:ml-48 md:mr-8 mt-[-50px] lg:ml-64 lg:mr-8 lg:pl-0 lg:pr-0">
      <input
        type="text"
        placeholder="Search..."
        className="w-full border text-sm md:text-lg p-2 rounded"
      />
    </div>
  );
}

export default Search;
