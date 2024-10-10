import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import wallpaperBlurredPng from "../assets/wallpaper-blurred-dark.png";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

export default function ImageResizerForm() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);
  const [resized, setResized] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setError(null);
    setResized(false);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
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
    formData.append("width", width);
    formData.append("height", height);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/images/resize`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
      setResized(true);
    } catch (error) {
      console.error("Error resizing the image", error.response || error);
      setError("Error resizing the image");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-900/50 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg font-manrope font-extrabold">
        <picture className="absolute inset-0 -z-50">
          <img
            loading="lazy"
            draggable="false"
            src={wallpaperBlurredPng}
            className="h-full w-full object-cover"
          />
        </picture>
        <h1 className="text-2xl font-bold mb-6 text-center font-bricolage">Image Resizer</h1>

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
              <>
                <div className="mb-6">
                  <Label htmlFor="width-input" className="block mb-2">Width (px)</Label>
                  <Input
                    id="width-input"
                    type="number"
                    value={width}
                    onChange={handleWidthChange}
                    className="w-full"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="height-input" className="block mb-2">Height (px)</Label>
                  <Input
                    id="height-input"
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                    className="w-full"
                    required
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={!selectedFile || !width || !height}
            >
              Resize Image
            </Button>
          </form>
        )}

        {downloadUrl && (
          <div className="mt-6">
            <a href={downloadUrl} download={`resized.${selectedFile.name.split('.').pop()}`}>
              <Button className="w-full">
                Download Resized Image
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