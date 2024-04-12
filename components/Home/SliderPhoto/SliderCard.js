import React from "react";
import Image from "next/image";

export default function SliderCard({ data }) {
  return (
    <div>
      <Image
        placeholder="blur"
        src={data}
        width={500}
        height={500}
        alt="Picture of the author"
        blurDataURL="/blur.png"
        className="object-contain rounded-xl overflow-hidden w-full hover:scale-105 duration-300 cursor-grab"
      />
    </div>
  );
}
