import React, { useState } from "react";
import Head from "next/head";
import About from "../components/Home/About";
import SliderPhoto from "../components/Home/SliderPhoto/SliderPhoto";
import Roadmap from "../components/Home/Roadmap";
import ImageEditorContainer from "../components/Home/ImageEditor/ImageEditorContainer.js";

export default function Index() {
  return (
    <>
      <Head>
        <title>Fada</title>
      </Head>
      <div className="overflow-hidden ">
        <ImageEditorContainer />
        <section
          className="bg-primary bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center "
          id="about"
        >
          <div className=" py-20 ">
            <div className="container-sk">
              <About />
            </div>
            <SliderPhoto />
          </div>
        </section>
        <Roadmap />
       
      </div>
    </>
  );
}
