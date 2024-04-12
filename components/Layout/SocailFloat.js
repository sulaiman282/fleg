import React from "react";
import Image from "next/image";

export default function SocailFloat() {
  return (
    <>
      <div className=" ">
        <div className="sticky-icon ">
          <a
            href={`https://magiceden.io/collections/polygon/project_fada`}
            target="_blank"
            rel="noreferrer"
            className=" backdrop-blur-lg bg-white/20 flex justify-between items-center mx-5 shadow-md "
          >
            <p className="text-center w-full text-primary font-bold">
              Magiceden{" "}
            </p>
            <Image
              placeholder="blur"
              src="/link1.png"
              width={100}
              height={100}
              alt="Picture of the author"
              blurDataURL="/blur.png"
              className="object-contain h-8 w-8 mr-2 "
            />
          </a>

          <a
            href={`https://opensea.io/collection/project-fada`}
            target="_blank"
            rel="noreferrer"
            className=" backdrop-blur-lg bg-white/20 flex justify-between items-center mx-5 shadow-md"
          >
            <p className="text-center w-full text-sky-700 font-bold">
              Opensea{" "}
            </p>
            <Image
              placeholder="blur"
              src="/link2.svg"
              width={100}
              height={100}
              alt="Picture of the author"
              blurDataURL="/blur.png"
              className="object-contain h-8 w-8  mr-2"
            />
          </a>
        </div>
      </div>
    </>
  );
}
