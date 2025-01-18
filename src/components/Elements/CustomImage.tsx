"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageProps {
  src: string | StaticImageData; // The source of the image
  alt?: string; // Alt text for accessibility
  width?: number | string; // Optional width
  height?: number | string; // Optional height
  className?: string; // Optional custom class
  layout?: "fixed" | "intrinsic" | "responsive" | "fill"; // Layout options for next/image
  priority?: boolean; // Load image eagerly if true
  quality?: number; // Image quality (1-100)
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"; // Object-fit style
  objectPosition?: string; // CSS object-position value
  placeholder?: "blur" | "empty"; // Placeholder behavior
  blurDataURL?: string; // URL for the blur placeholder
}

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  layout = "intrinsic",
  priority = false,
  quality = 75,
  objectFit = "cover",
  objectPosition = "center",
  placeholder = "empty",
  blurDataURL,
}) => {
  // Convert src to a string if it's not already
  const srcString = typeof src === "string" ? src : src.src;

  // Check if the source is an SVG
  const isSvg = srcString.endsWith(".svg");

  if (isSvg) {
    return (
      <img
        src={srcString}
        alt={alt}
        width={width as number}
        height={height as number}
        className={className}
        style={{
          objectFit,
          objectPosition,
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt ? alt : "image"}
      width={
        layout === "intrinsic" || layout === "responsive"
          ? undefined
          : typeof width === "number"
          ? width
          : parseInt(width as string)
      }
      height={
        layout === "intrinsic" || layout === "responsive"
          ? undefined
          : typeof height === "number"
          ? height
          : parseInt(height as string)
      }
      layout={layout}
      priority={priority}
      quality={quality}
      objectFit={objectFit}
      objectPosition={objectPosition}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={className}
    />
  );
};

export default CustomImage;
