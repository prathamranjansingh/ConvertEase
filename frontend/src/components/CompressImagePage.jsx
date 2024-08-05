import React, { useState } from "react";
import axios from "axios";

const CompressImagePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [quality, setQuality] = useState(75);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setError(null);
  };

  const incrementQuality = () => {
    setDownloadUrl("");
    setQuality((prevQuality) => Math.min(prevQuality + 1, 100));
  };

  const decrementQuality = () => {
    setDownloadUrl("");
    setQuality((prevQuality) => Math.max(prevQuality - 1, 1));
  };

  const handleQualityChange = (event) => {
    const value = Math.max(1, Math.min(100, Number(event.target.value)));
    setQuality(value);
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
        `${import.meta.env.VITE_BACKEND_URL}/api/images/compress`, // Use environment variable
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
    <div className="compress-image-page md:mx-20 my-10">
      <div className="flex flex-col items-center gap-6 justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
          Image Compression
        </h1>
        {error && <p className="error">{error}</p>}
        <div className="my-10 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <label className="text-sm text-slate-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Image
              </label>
              <input
                id="picture"
                type="file"
                className="flex h-10 w-full rounded-md border border-input bg-blue-500/30 px-3 py-2 text-sm text-slate-200 file:border-0 file:bg-transparent file:text-slate-200 file:text-sm file:font-medium"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="my-10 flex flex-row gap-10 items-center justify-center">
              <div className="py-2 px-3  rounded-lg bg-blue-500/30 border-blue-700">
                <div className="w-full flex justify-between items-center gap-x-5">
                  <div className="grow">
                    <span className="block text-xs  text-slate-300">
                      Select quality
                    </span>
                    <input
                      className="w-full p-0 bg-transparent border-0 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-white"
                      style={{ MozAppearance: "textfield" }}
                      type="number"
                      aria-roledescription="Number field"
                      value={quality}
                      onChange={handleQualityChange}
                      min="1"
                      max="100"
                      required
                    />
                  </div>
                  <div className="flex justify-end items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border  shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-blue-500/30 border-blue-700 text-white hover:bg-blue-800 focus:bg-blue-800"
                      onClick={decrementQuality}
                      aria-label="Decrease">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border  shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none bg-blue-500/30 border-blue-700 text-white hover:bg-blue-800 focus:bg-blue-800"
                      onClick={incrementQuality}
                      aria-label="Increase">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span className="text-lg">Convert</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
            </div>
          </form>
          {downloadUrl && (
            <div className="flex justify-center items-center">
              <a href={downloadUrl} download="compressed-image.jpg">
                <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                  <span className="text-lg">Download</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompressImagePage;
