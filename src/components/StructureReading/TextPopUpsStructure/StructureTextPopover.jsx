import React, { useState } from "react";
import { Popover } from "@mui/material/";
import * as PopUps from "./StructurePopUpText";

const TextPopover = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <span
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        style={{ color: "red", cursor: "pointer" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        role="button"
        aria-hidden="true"
      >
        {text}
      </span>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableRestoreFocus
      >
        {text === "ABSTRACT" ? (
          <PopUps.Abstract />
        ) : text === "TIME" ? (
          <PopUps.Time />
        ) : text === "FIRST-IN-FIRST-OUT" ? (
          <PopUps.FIFO />
        ) : text === "METHODS" ? (
          <PopUps.Methods />
        ) : text === "LAST-IN-FIRST-OUT" ? (
          <PopUps.LIFO />
        ) : text === "STATIC" ? (
          <PopUps.Static />
        ) : text === "INDEXING" ? (
          <PopUps.Indexing />
        ) : text === "RECURSION" ? (
          <PopUps.Recursion />
        ) : null}
      </Popover>
    </>
  );
};

export default TextPopover;
