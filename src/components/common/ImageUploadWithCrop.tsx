"use client";

import type { ComponentType } from "react";
import ImageUploadWithCropJsx from "./ImageUploadWithCrop.jsx";

export type ImageCropOutputOptions = {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  mime?: string;
};

export type ImageCropMeta = {
  width?: number;
  height?: number;
  mime?: string;
};

export type AspectPreset<T extends number | null = number | null> = {
  label: string;
  value: T;
};

export type ImageUploadWithCropProps = {
  label?: string;
  disabled?: boolean;
  existingImageUrl?: string;
  aspectRatio?: number | null;
  showOriginalSize?: boolean;
  aspectPresets?: AspectPreset[];
  output?: ImageCropOutputOptions;
  onImageCropped?: (blob: Blob | null, meta?: ImageCropMeta) => void;
};

const ImageUploadWithCrop = ImageUploadWithCropJsx as unknown as ComponentType<ImageUploadWithCropProps>;

export default ImageUploadWithCrop;

