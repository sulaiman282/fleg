import { Avatar, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function PreloadingScreen({ togglePlay1, handleToggleVideo1 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show === false) {
      window.scroll({
        top: 0,
        behavior: "smooth" 
      });      
      document.body.classList.add("overflow-hidden");
    }
  }, [show]);

  const [hide, setHide] = useState(false);

  const makeHide = () => {
    setTimeout(() => {
      setHide(true);

      document.body.classList.remove("overflow-hidden");
    }, 2000);
  };

  return (
    <>
      {!hide && (
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-transparent flex justify-center items-center  z-40 `}
        >
          <div className="flex h-full w-full  relative">
            <div
              className={`relative ${
                show ? "split-half1" : ""
              }   w-full h-full`}
            >
              <div className="w-full h-full bg-red-700/10 backdrop-blur-md"></div>
            </div>
            <div
              className={`relative ${show ? "split-half2" : ""} w-full h-full `}
            >
              <div className="w-full h-full bg-blue-700/10 backdrop-blur-md"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 flex flex-col items-center gap-2">
              <IconButton
                onClick={(e) => {
                  togglePlay1();
                  handleToggleVideo1();
                  setShow(true);
                  makeHide();
                }}
                className={`animate-pulse  w-fit h-fit duration-500    ${
                  show ? "split-half3" : "bg-black/20 hover:bg-white mt-5"
                }`}
              >
                <Avatar src="/fav.png" className="h-12 w-12"></Avatar>
              </IconButton>
              <span
                 onClick={(e) => {
                  togglePlay1();
                  handleToggleVideo1();
                  setShow(true);
                  makeHide();
                }}
                className={`mt-5 font-bold lg:text-4xl md:text-3xl text-2xl text-primary text-center  ${
                  show ? "split-half3 " : ""
                }`}
              >
                Uniting Tickers
                <br />
                Join Now
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
