import React, { useState } from "react";
import FileUploader from "./FileUploader";
import imglyRemoveBackground from "@imgly/background-removal"

export default function ImageEditorContainer() {
  const [files, setFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleBackgroundRemoval = async () => {
    if (files.length === 0) return;
    
    const image_src = files[0]; // Assuming the first file in the files array is the image
    
    try {
      const blob = await imglyRemoveBackground(image_src);
      const buffer = Buffer.from(await blob.arrayBuffer());
      const dataURL = `data:image/png;base64,${buffer.toString("base64")}`;
      setPreviewUrl(dataURL);
    } catch (error) {
      console.error("Error removing backgroundrte:", error);
    }
  };

  return (
    <div>
      <FileUploader setFiles={setFiles} />
      {previewUrl && (
        <div>
          <h2>Preview with background removed</h2>
          <img src={previewUrl} alt="Background Removed" />
        </div>
      )}
      <button onClick={handleBackgroundRemoval}>Remove Background</button>
    </div>
  );
}
