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
    const start = performance.now(); // Get the current timestamp
    const startPosition = height; // Current scroll position
    const targetPosition = 0; // Target scroll position (300px from the top)
    const totalHeight = document.body.scrollHeight - window.innerHeight; // Calculate total scrollable height
    const remainingDistance = Math.abs(targetPosition - startPosition); // Remaining distance to scroll
    const totalDuration = 2000; // Total duration for smooth scroll (3 seconds)
    const scrollDuration = (remainingDistance / totalHeight) * totalDuration; // Calculate duration based on remaining distance

    // Define the scroll function
    const scrollStep = (timestamp) => {
      const elapsed = timestamp - start; // Calculate elapsed time

      // Calculate the new scroll position based on elapsed time
      const newPosition =
        startPosition +
        (targetPosition - startPosition) * (elapsed / scrollDuration);

      // Scroll to the new position
      window.scrollTo({ top: newPosition, behavior: "smooth" });

      // Continue scrolling if duration not elapsed
      if (elapsed < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    };

    // Start scrolling
    requestAnimationFrame(scrollStep);
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
            <KeyboardArrowUpIcon className="bg-white rounded-full text-primary shadow-lg focus:text-white !text-[40px] " />
          </IconButton>
        </div>
      )}
    </>
  );
}
