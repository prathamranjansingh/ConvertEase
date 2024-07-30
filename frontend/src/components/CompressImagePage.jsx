import React, { useState } from "react";
import axios from "axios";

const CompressImagePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [quality, setQuality] = useState(75); // Default quality
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setError(null);
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
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
    formData.append("quality", quality);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/images/compress",
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error compressing the image", error);
      setError("Error compressing the image");
    }
  };

  return (
    <div className="compress-image-page">
      <h1>Image Compression</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <input
          type="number"
          value={quality}
          onChange={handleQualityChange}
          min="1"
          max="100"
          required
        />
        <button type="submit">Compress</button>
      </form>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download="compressed-image.jpg">
            <button>Download Compressed Image</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default CompressImagePage;
