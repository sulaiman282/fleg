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
      dropzoneClass="h-full !flex !flex-col !items-center !justify-center gap-4 border-2 rounded-lg !border-dashed !border-primary"
      dropzoneParagraphClass="custom-paragraph"
      dropzoneTextClass="custom-text"
      previewGridClasses={{
        container: "custom-preview-container",
        item: "custom-preview-item",
      }}
    />
  );
};

export default FileUploader;
