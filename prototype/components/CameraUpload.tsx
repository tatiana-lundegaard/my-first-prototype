"use client";

import { useRef, useState } from "react";
import { Button } from "@mantine/core";

interface CameraUploadProps {
  label?: string;
  accept?: string;
  onFile?: (file: File) => void;
}

export function CameraUpload({ label = "Fotografie / dokument", onFile }: CameraUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleCapture = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
    onFile?.(file);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleChange}
      />
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="light" color="green" size="sm" onClick={handleCapture}>
          Vyfotit / nahrát
        </Button>
        {preview && (
          <div className="relative h-20 w-20 overflow-hidden rounded border">
            <img src={preview} alt="Náhled" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
