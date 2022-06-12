import * as React from "react";
import Chip from "@mui/material/Chip";

export default function Tag({ tagIcon, tagName, setFilterData, filterData }) {
  function handleClick(tagName) {
    setFilterData(tagName);
  }
  return (
    <Chip
      icon={tagIcon ? tagIcon : null}
      label={tagName}
      variant="outlined"
      onClick={(e) => handleClick(tagName)}
      className={tagName === filterData ? "background-black text-white" : ""}
    />
  );
}
