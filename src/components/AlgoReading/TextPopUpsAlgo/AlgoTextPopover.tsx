import React, { useState } from "react";
import { Popover } from "@mui/material/";
import * as PopUps from "./AlgoPopUpText";

const AlgoTextPopover: React.FC<{ text: string }> = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
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
        {text === "IN-PLACE" ? (
          <PopUps.InPlace />
        ) : text === "OUT-OF-PLACE" ? (
          <PopUps.OutOfPlace />
        ) : text === "QUADRATIC" ? (
          <PopUps.Quadratic />
        ) : text === "STABLE" ? (
          <PopUps.Stable />
        ) : text === "UNSTABLE" ? (
          <PopUps.UnStable />
        ) : text === "TIME" ? (
          <PopUps.Time />
        ) : text === "SPACE" ? (
          <PopUps.Space />
        ) : text === "BIG O" ? (
          <PopUps.BigO />
        ) : text === "NESTED FOR LOOP" ? (
          <PopUps.NestedForLoop />
        ) : text === "DIVIDE-AND-CONQUER" ? (
          <PopUps.DnC />
        ) : text === "LINEARITHMIC" ? (
          <PopUps.Linearithmic />
        ) : text === "RECURSION" ? (
          <PopUps.Recursion />
        ) : null}
      </Popover>
    </>
  );
};

export default AlgoTextPopover;
