import React, { useState } from "react";
import axios from "axios";

const ImageConverterForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [format, setFormat] = useState("png");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setError(null);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("format", format);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/images/convert`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      setError("Error converting the image");
      console.error("Error converting the image", error);
    }
  };

  return (
    <div className="converter-form">
      <h1>Image Format Converter</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <select value={format} onChange={handleFormatChange}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
          <option value="tiff">TIFF</option>
          <option value="gif">GIF</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download={`converted.${format}`}>
            <button>Download Converted Image</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverterForm;
