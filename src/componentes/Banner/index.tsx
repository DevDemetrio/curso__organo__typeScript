import "./Banner.css";
import React from "react";

interface BannerProps {
  enderecoImagem: string;
  textAlternativo?: string;
}
export const Banner = ({ enderecoImagem, textAlternativo }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      <img src={enderecoImagem} alt={textAlternativo} />
    </header>
  );
};

export default Banner;
