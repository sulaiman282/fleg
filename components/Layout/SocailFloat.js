import React from "react";
import Image from "next/image";

export default function SocailFloat() {
  return (
    <>
      <div className=" ">
        <div className="sticky-icon ">
          <a
            href={`https://t.me/FlegDuAmerika`}
            target="_blank"
            rel="noreferrer"
            className=" backdrop-blur-lg bg-white/20 hover:bg-white/70 duration-300 flex justify-between items-center mx-5 shadow-md "
          >
            <p className="text-center w-full text-primary font-bold">
              Telegram
            </p>
            <Image
              placeholder="blur"
              src="/telegram.png"
              width={100}
              height={100}
              alt="logo"
              blurDataURL="/blur.png"
              className="object-contain h-8 w-8 mr-2 "
            />
          </a>

          <a
            href={`https://twitter.com/FlegDuAmerika`}
            target="_blank"
            rel="noreferrer"
            className=" backdrop-blur-lg bg-white/20 hover:bg-white/70 duration-300 flex justify-between items-center mx-5 shadow-md"
          >
            <p className="text-center w-full text-sky-700 font-bold">Twitter</p>
            <Image
              placeholder="blur"
              src="/twitter.png"
              width={100}
              height={100}
              alt="logo"
              blurDataURL="/blur.png"
              className="object-contain h-8 w-8  mr-2"
            />
          </a>
          <a
            href={`https://dexscreener.com/solana/3wladydq5nzqlhvkjfarrnsfzzjt2fqlta2ry86eiguq`}
            target="_blank"
            rel="noreferrer"
            className=" backdrop-blur-lg bg-white/20 hover:bg-white/70 duration-300 flex justify-between items-center mx-5 shadow-md"
          >
            <p className="text-center w-full text-sky-700 font-bold">
              Dexscreener
            </p>
            <Image
              placeholder="blur"
              src="/dexscreener.png"
              width={100}
              height={100}
              alt="logo"
              blurDataURL="/blur.png"
              className="object-contain h-8 w-8  mr-2"
            />
          </a>
        </div>
      </div>
    </>
  );
}
