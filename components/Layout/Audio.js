import React, { useRef, useState } from "react";

import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { IconButton } from "@mui/material";

const AudioPlayer = ({ audioRef, isPlaying, setIsPlaying, togglePlay }) => {
  return (
    <div className="fixed bottom-0 left-0 m-5 ">
      <audio
        ref={audioRef}
        src="/audio1.mp3"
        autoPlay
        loop
        className="pointer-events-none"
      />

      <p id="demo"></p>
      <IconButton
        onClick={togglePlay}
        className="bg-primary/80 hover:bg-primary  animate-pulse"
      >
        {isPlaying ? (
          <VolumeDownIcon className="lg:text-4xl text-white" />
        ) : (
          <VolumeOffIcon className="lg:text-4xl text-white" />
        )}
      </IconButton>
    </div>
  );
};

export default AudioPlayer;
