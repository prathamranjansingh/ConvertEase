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
    setDownloadUrl("");
    setFormat(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const url = `${import.meta.env.VITE_BACKEND_URL}/api/images/compress`;
    console.log("Submitting to URL:", url);

    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("format", format);

    // Log FormData entries
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/images/convert`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error converting the image", error.response || error);
      setError("Error converting the image");
    }
  };

  return (
    <div className="converter-form md:mx-20 my-10">
      <div className="flex flex-col items-center gap-6 justify-center">
        <h1 className="mb-4 text-4xl  text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
          Image Format Converter
        </h1>
        {error && <p className="error text-red-500">{error}</p>}
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
              <div className="py-2 px-3 rounded-lg">
                <div className="w-full flex justify-between items-center gap-x-5">
                  <div className="grow">
                    <label className="block mb-2 text-sm font-medium  text-white">
                      Select format
                    </label>
                    <select
                      className="border text-sm rounded-lg block w-full p-2.5 bg-[#12274a] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      value={format}
                      onChange={handleFormatChange}
                      required>
                      <option value="png">PNG</option>
                      <option value="jpeg">JPEG</option>
                      <option value="webp">WEBP</option>
                      <option value="gif">GIF</option>
                    </select>
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
              <a href={downloadUrl} download={`converted.${format}`}>
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

export default ImageConverterForm;
