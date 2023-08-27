import React from 'react';
import Image from 'next/image';

interface Props {
  children?: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  altText?: string;
}

const Feature: React.FC<Props> = ({
  children,
  className = '',
  imgSrc,
  imgWidth,
  imgHeight,
  altText = '',
}) => {
  const tailwindStyle = `${className}`;

  return (
    <div className={tailwindStyle}>
      <Image
        src={imgSrc}
        width={imgWidth}
        height={imgHeight}
        alt={altText}
        className="w-full"
      />
      {children}
    </div>
  );
};

export default Feature;
