import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
export default function Scroller() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
  };

  const Scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {height > 400 && (
        <div className="fixed bottom-0 right-0 m-5 lg:m-10 block ">
          <IconButton
            variant="text"
            className="text-primary w-fit h-fit"
            onClick={Scrolltotop}
          >
            <KeyboardArrowUpIcon className="bg-white rounded-full text-primary shadow-lg focus:text-white text-4xl " />
          </IconButton>
        </div>
      )}
    </>
  );
}
