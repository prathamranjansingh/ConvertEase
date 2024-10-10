import { useState, useRef } from 'react';
import axios from 'axios';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import wallpaperBlurredPng from "../assets/wallpaper-blurred-dark.png";
import { useToast } from "@/hooks/use-toast"
import Navbar from '@/components/Navbar';
export default function ImageCompressionComponent() {
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [quality, setQuality] = useState(80);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompression = async () => {
    setError(null);
    setDownloadUrl("");

    if (!selectedFile) {
      setError("Please select an image to compress.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("quality", quality);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/images/compress`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error compressing the image:", error);
      setError("Error compressing the image");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error compressing the image. Please try again.",
      });
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-neutral-900/50 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg">
      <picture className="absolute inset-0 -z-50">
        <img
          loading="lazy"
          draggable="false"
          src={wallpaperBlurredPng}
          className="h-full w-full object-cover"
        />
      </picture>
      <h1 className="text-2xl font-bold mb-6 text-center font-bricolage">Image Compression</h1>

      <div className="mb-6">
        <Label htmlFor="image-upload" className="block mb-2">Upload Image</Label>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="w-full"
        />
      </div>

      {imagePreview && (
        <div className="mb-6">
          <Label className="block mb-2">Preview</Label>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {!downloadUrl && (
        <>
          <div className="mb-6">
            <Label htmlFor="quality-slider" className="block mb-2">Quality: {quality}%</Label>
            <Slider
              id="quality-slider"
              min={1}
              max={100}
              step={1}
              value={[quality]}
              onValueChange={(value) => setQuality(value[0])}
              className="w-full"
            />
          </div>

          <Button
            onClick={handleCompression}
            className="w-full"
            disabled={!imagePreview}
          >
            Compress Image
          </Button>
        </>
      )}

      {downloadUrl && (
        <div className="mt-6">
          <a href={downloadUrl} download="compressed-image.jpg">
            <Button className="w-full">
              Download Compressed Image 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </a>
        </div>
      )}
    </div>
    </>
  );
}
