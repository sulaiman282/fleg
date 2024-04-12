import React, { useState, useEffect } from "react";
import axios from "axios";
import FileUploader from "./FileUploader";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ReplayIcon from "@mui/icons-material/Replay";

export default function ImageEditorContainer() {
  const [files, setFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackgroundRemoval = async () => {
    if (files.length === 0) return;

    const imageFile = files[0]; // Assuming the first file in the files array is the image
    const convertedFile = new File([imageFile], "filename.png", {
      type: "image/png",
    });

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", convertedFile);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob", // Set responseType to 'blob' to receive Blob data
        }
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
    // Check if there's a preview image URL
    if (previewUrl) {
      // Create a temporary anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = previewUrl;
      downloadLink.download = "background_removed_image.png"; // Set the default filename for download
      document.body.appendChild(downloadLink);
      downloadLink.click(); // Simulate a click event to trigger the download
      document.body.removeChild(downloadLink); // Remove the anchor element from the DOM
    } else {
      // If no preview image URL is available
      toast.warn("No image to download. Please process an image first.");
    }
  };

  useEffect(() => {
    if (files?.length > 0) {
      handleBackgroundRemoval();
    }
  }, [files]);

  return (
    <div className="bg-slate-100 py-5 lg:py-10">
      <div className="container-sk  ">
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold animate__animated animate__fadeIn mb-5 text-primary ">
          Fleg
        </h2>

        {!previewUrl ? (
          <>
            {!isLoading ? (
              <div className="aspect-video lg:w-1/2 mx-auto">
                <FileUploader setFiles={setFiles} />
              </div>
            ) : (
              <div className="aspect-video bg-white lg:w-1/2  mx-auto flex flex-col justify-center items-center gap-4 border-2 rounded-lg border-dashed border-primary p-5">
                <CircularProgress />
                <p className="text-center">Please wait while we are processing your image</p>
              </div>
            )}
          </>
        ) : (
          <div className=" lg:w-1/2 mx-auto aspect-video">
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
        )}
      </div>
    </div>
  );
}
