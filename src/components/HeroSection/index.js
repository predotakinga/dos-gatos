import React from "react";
// import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src="https://drive.google.com/file/d/1HGE7D4pq9oix5548l9YN2jNCMbYkXFwD/preview"
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>DOS GATOS</HeroH1>
        <HeroP>Taqueria</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
