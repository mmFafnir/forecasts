import React, { FC } from "react";
import NextImage from "next/image";

interface IProps {
  src: string;
  errorSrc?: string;
  loadingSrc?: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

const Image: FC<IProps> = ({
  src,
  errorSrc,
  loadingSrc,
  alt,
  width,
  height,
  title = "",
}) => {
  return (
    <NextImage
      src={src}
      title={title}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
