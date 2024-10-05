import React, { useCallback, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const FileUploader = ({ uploadedFiles, setUploadedFiles }) => {
  console.log(uploadedFiles, "uploadfilessss");
  const onDrop = useCallback((acceptedFiles) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (file) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const filePreviews = uploadedFiles.map((file) => (
    <Col lg={6} className="my-4">
      <div key={file.name} className="file-preview">
        <img className="img-fluid" src={file.preview || file} />
        <p>{file.name}</p>
        <button onClick={() => removeFile(file)}>Remove</button>
      </div>
    </Col>
  ));

  return (
    <Row>
      <Col lg="4" className="my-2">
        <div class="position-relative text-center upload-file-doc upload-file d-flex align-items-center justify-content-center">
          <div
            className={`dropzone py-3 ${isDragActive ? "active" : ""}`}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Drag and drop files here, or click to select files</p>
            )}
            {/* <div className="file-previews">{filePreviews}</div> */}
          </div>
        </div>
      </Col>
      <Col lg="8">
        <Row className="">{filePreviews}</Row>
      </Col>
    </Row>
  );
};

export default FileUploader;
