import React, { useState, useEffect } from "react";
import axios from "axios";
import FileUploader from "./FileUploader";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ReplayIcon from "@mui/icons-material/Replay";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import Image from "next/image";
import Particless from "../Particles";

export default function ImageEditorContainer() {
  const [files, setFiles] = useState([]);
  const [filename, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackgroundRemoval = async () => {
    if (files.length === 0) return;
    const imageFile = files[0];
    setFileName(files[0]?.name);

    // Compress image
    const options = {
      maxSizeMB: 1, // maximum file size in MB
      maxWidthOrHeight: 1024, // maximum width or height of the image
      useWebWorker: true, // use web worker for faster compression (recommended)
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      const convertedFile = new File([compressedFile], "filename.png", {
        type: "image/png",
      });

      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", convertedFile);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Cache-Control": "no-cache",
          },
          responseType: "blob",
        },
      );

      setIsLoading(false);

      if (response.data instanceof Blob) {
        // If response data is a Blob
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result); // Set the previewUrl state with the data URL
        };
        reader.readAsDataURL(response.data);
      } else {
        // If the API directly returns image URL
        setPreviewUrl(response.data.url); // Set the previewUrl state with the image URL
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Could not process the image. Please try again.");
    }
  };

  const tryagain = () => {
    setPreviewUrl(null);
    setIsLoading(false);
    setFiles([]);
  };

  const handleDownloadImage = () => {
    if (previewUrl) {
      const downloadLink = document.createElement("a");
      downloadLink.href = previewUrl;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  useEffect(() => {
    if (files?.length > 0) {
      handleBackgroundRemoval();
    }
  }, [files]);

  return (
    <section
      className="bg-slate-100 py-5 lg:py-10 min-h-screen flex  items-center w-full relative"
      id="ayp"
    >
      {/* <Particless/> */}
      <div className="container-sk  ">
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold animate__animated animate__fadeIn mb-5 lg:mb-10 text-primary ">
          Amerikanize Your Pfp
        </h2>

        {!previewUrl ? (
          <div className="flex container-sk md:flex-row flex-col gap-4 lg:gap-8 lg:h-[50vh]">
            <Image
              placeholder="blur"
              src={"/c1.jpg"}
              width={500}
              height={500}
              alt="sample"
              blurDataURL="/blur.png"
              className=" w-full h-full  md:w-1/2 "
            />
            {!isLoading ? (
              <div className="aspect-video lg:w-1/2 w-full mx-auto">
                <FileUploader setFiles={setFiles} />
              </div>
            ) : (
              <div className="aspect-video bg-white lg:w-1/2 w-full  mx-auto flex flex-col justify-center items-center gap-4 border-2 rounded-lg border-dashed border-primary p-5 bg-[url('/up.gif')] bg-cover bg-center  bg-no-repeat">
                <CircularProgress />
                <p className="text-center lg:text-3xl text-xl text-white">
                  Please wait while we are processing your image.<br/>
                  (Will take 10sec - 2 mins)
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex container-sk md:flex-row flex-col gap-4 lg:gap-8 lg:h-[50vh]">
            <Image
              placeholder="blur"
              src={"/c1.jpg"}
              width={500}
              height={500}
              alt="sample"
              blurDataURL="/blur.png"
              className=" w-full h-full  md:w-1/2 "
            />
            <div className=" md:w-1/2 w-full mx-auto ">
              <img
                src={previewUrl}
                alt="Background Removed  "
                className="w-full h-full  object-contain "
              />
              <div className="flex justify-center items-center gap-4 mt-5 lg:mt-10">
                <Button
                  onClick={handleDownloadImage}
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  Download
                </Button>
                <Button
                  onClick={tryagain}
                  variant="outlined"
                  startIcon={<ReplayIcon />}
                >
                  Try again{" "}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
