import { IconButton } from "@mui/material";
import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import WalletIcon from "@mui/icons-material/Wallet";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";

export default function Roadmap() {
  return (
    <section
      className="bg-[#AAC8E4] bg-[url('/bg1.gif')] bg-cover bg-center  bg-no-repeat relative py-10 lg:py-28 md:py-20  md:min-h-screen h-full"
      id="roadmap"
    >
      <div className="container-sk">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h4 className=" font-extrabold text-center text-white lg:text-6xl md:text-5xl text-4xl py-20 my-auto mt-5 ">
            How to buy
          </h4>
        </ScrollAnimation>

        <div className="min-h-[80vh] py-10 md:h-screen flex   justify-center items-center">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn" className="">
            <Image
              src="/faidenimage/13.png"
              width={500}
              height={500}
              alt="logo"
              className="object-cover lg:h-40 h-28 w-28 lg:w-40 aspect-square mx-auto rounded-full overflow-hidden mb-5 lg:mb-10"
            />
            <h4 className="font-extrabold text-primary text-center  lg:text-5xl md:text-4xl text-3xl my-auto mt-5 ">
              1.CREATE A WOLET
            </h4>
            <p className="font-extrabold   text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
              Donlod Phantom or your wolet of choese from the app star or Gugle
              Pley fur freh. Desktup users, donlod the Gugle Chrom ekstension by
              gowing to Phantom.
            </p>
          </ScrollAnimation>
        </div>

        <div className="min-h-[80vh] py-10 md:h-screen flex   justify-center items-center">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn" className="">
            <Image
              src="/faidenimage/12.png"
              width={500}
              height={500}
              alt="logo"
              className="object-cover lg:h-40 h-28 w-28 lg:w-40 aspect-square mx-auto rounded-full overflow-hidden mb-5 lg:mb-10"
            />
            <h4 className="font-extrabold text-primary text-center  lg:text-5xl md:text-4xl text-3xl my-auto mt-5 ">
              2.GET SOM SOL
            </h4>
            <p className="font-extrabold   text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
              Hav SOL in yur wolet to switch to $FLEG. If yu dun&lsquo;t hav any
              SOL, yu can buy direktly on Phantom, transfer frum anuther wolet,
              or buy on another ekchange and send it to yur wolet.
            </p>
          </ScrollAnimation>
        </div>

        <div className="min-h-[80vh] py-10 md:h-screen flex   justify-center items-center">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn" className="">
            <Image
              src="/faidenimage/16.png"
              width={500}
              height={500}
              alt="logo"
              className="object-cover lg:h-40 h-28 w-28 lg:w-40 aspect-square mx-auto rounded-full overflow-hidden mb-5 lg:mb-10"
            />
            <h4 className="font-extrabold text-center text-primary lg:text-5xl md:text-4xl text-3xl my-auto mt-5 ">
              3.GO TO RAYDIUM
            </h4>
            <p className="font-extrabold   text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
              Conct to Raydium. Go to Raydium in gugle chrom or on the browsr
              inside yur Phantom app. Connekt your wolet. Paste the $FLEG token
              address into Raydium, selekt $FLEG, and confirm. Wen Phantom
              prompts you for a wolet signature, sign.
            </p>
          </ScrollAnimation>
        </div>

        <div className="min-h-[80vh] py-10 md:h-screen flex   justify-center items-center">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn" className="">
            <Image
              src="/faidenimage/19.png"
              width={500}
              height={500}
              alt="logo"
              className="object-cover lg:h-40 h-28 w-28 lg:w-40 aspect-square mx-auto rounded-full overflow-hidden mb-5 lg:mb-10"
            />
            <h4 className="font-extrabold text-center text-primary lg:text-5xl md:text-4xl text-3xl my-auto mt-5 ">
              4.$FLEG
            </h4>
            <p className="font-extrabold   text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
              Swap SOL for $FLEG. We hav Zero taxes so yu don&lsquo;t ned to
              warry about buying with a specifik slippage, although you may.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
