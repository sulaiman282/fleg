import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const FileUploader = ({ setFiles }) => {
  const handleChange = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <DropzoneArea
      onChange={handleChange}
      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
      dropzoneText="Drag and drop an image here or click"
      showAlerts={false}
      filesLimit={1}
      showPreviewsInDropzone={true}
      showPreviews={false}
    />
  );
};

export default FileUploader;
