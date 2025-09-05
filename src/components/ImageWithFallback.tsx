"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "alt" | "src"> & {
  alt: string;
  src: string | ReadonlyArray<string> | string[];
  fallbackClassName?: string;
};

export function ImageWithFallback({ fallbackClassName, onError, alt, src, ...props }: Props) {
  const [failed, setFailed] = React.useState(false);
  const sources = Array.isArray(src) ? [...src] : [src];
  const [index, setIndex] = React.useState(0);

  if (failed) {
    return (
      <div className={`fallback-tile ${fallbackClassName ?? ""}`} />
    );
  }

  return (
    <Image
      alt={alt}
      src={sources[index]}
      {...props}
      onError={(e) => {
        if (index < sources.length - 1) {
          setIndex((i) => i + 1);
          return;
        }
        setFailed(true);
        onError?.(e);
      }}
    />
  );
}


