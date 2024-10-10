import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import wallpaperBlurredPng from "../assets/wallpaper-blurred-dark.png";
import Navbar from "@/Components/Navbar";
import { useToast } from "@/hooks/use-toast";
export default function ImageConverterForm() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState(null);
  const [format, setFormat] = useState("png");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);
  const [converted, setConverted] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setError(null);
    setConverted(false);
  };
  
  const handleFormatChange = (event) => {
    setDownloadUrl("");
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
        `${import.meta.env.VITE_BACKEND_URL}/api/images/convert`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
      setConverted(true);
    } catch (error) {
      console.error("Error converting the image", error.response || error);
      setError("Error converting the image");
    }
  };


  return (
    <>
    <Navbar/>
    <div className="bg-neutral-900/50 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg font-manrope font-extrabold">
      <picture className="absolute inset-0 -z-50">
        <img
          loading="lazy"
          draggable="false"
          src={wallpaperBlurredPng}
          className="h-full w-full object-cover"
        />
      </picture>
      <h1 className="text-2xl font-bold mb-6 text-center font-bricolage">Image Format Converter</h1>
  
      {selectedFile && (
        <div className="mb-6">
          <Label className="block mb-2">Preview</Label>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
  
      {!downloadUrl && (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Label htmlFor="image-upload" className="block mb-2">Upload Image</Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
              required
            />
          </div>
  
          {selectedFile && (
            <div className="mb-6">
              <Label htmlFor="format-select" className="block mb-2">Select Format</Label>
              <div className="relative">
                <select
                  id="format-select"
                  value={format}
                  onChange={handleFormatChange}
                  className="w-full px-3 py-2 pr-10 rounded-md font-manrope text-xs font-bold bg-neutral-800 text-white appearance-none outline-none focus:ring-0"
                  required
                >
                  <option className="font-bold" value="png">PNG</option>
                  <option className="font-bold" value="jpeg">JPEG</option>
                  <option className="font-bold" value="webp">WEBP</option>
                  <option className="font-bold" value="gif">GIF</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.944l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
  
          <Button
            type="submit"
            className="w-full"
            disabled={!selectedFile}
          >
            Convert Image
          </Button>
        </form>
      )}
  
      {downloadUrl && (
        <div className="mt-6">
          <a href={downloadUrl} download={`converted.${format}`}>
            <Button className="w-full">
              Download Converted Image
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </a>
        </div>
      )}
  
      {error && toast({
        variant: "destructive",
        title: "Error",
        description: error,
      })}
    </div>
    </>
  );
}
