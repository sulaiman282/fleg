import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useWindow from "../../hooks/useWindowSize";
export default function Hero({ videoRef, handleToggleVideo1 }) {
  const useWindowSize = useWindow();
  const [show, setShow] = useState(true);

  console.log(useWindowSize);

  // useEffect(() => {
  //   let timeoutId;

  //   if (useWindowSize?.width >= 768) {
  //     setShow(true);
  //     timeoutId = setTimeout(() => {
  //       handleToggleVideo1();
  //     }, 1000);
  //   } else {
  //     setShow(false);
  //   }

  //   return () => {
  //     clearTimeout(timeoutId); // Cancel the timeout if the component unmounts or the dependency changes
  //   };
  // }, [useWindowSize]);

  return (
    <section className="" id="hero">
      <video
        ref={videoRef}
        loop
        className="w-full  object-cover  h-screen  pointer-events-none"
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
