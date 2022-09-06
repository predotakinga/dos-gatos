import React from "react";
import Pdf from "../../images/menu.pdf";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../images/tacos3.jpg";
import img2 from "../../images/tacos2.jpg";
import img3 from "../../images/tacos.jpg";
import img4 from "../../images/dinner.jpg";
import img5 from "../../images/soup.jpg";
import img6 from "../../images/quesadilla.jpg";

import {
  MenuContainer,
  MenuWrapper,
  MenuRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  BtnWrap,
  PdfLink,
  Btn,
} from "./MenuElements";

import ButtonUnstyled from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #486e39;
  padding: 12px 24px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #2f4725;
  }
`;

const slideImages = [
  {
    url: img1,
    caption: "Slide 1",
  },
  {
    url: img2,
    caption: "Slide 2",
  },
  {
    url: img3,
    caption: "Slide 3",
  },
  {
    url: img4,
    caption: "Slide 3",
  },
  {
    url: img5,
    caption: "Slide 3",
  },
  {
    url: img6,
    caption: "Slide 3",
  },
];

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
};

const Menu = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  showButton,
}) => {
  return (
    <>
      <MenuContainer lightBg={lightBg} id={id}>
        <MenuWrapper>
          <MenuRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* <Button to="/">Button</Button> */}
                  {showButton ? (
                    <PdfLink href={Pdf} tager="_blank">
                      <CustomButton>Zobacz menu</CustomButton>
                    </PdfLink>
                  ) : null}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {/* <Img src={img} alt={alt} /> */}
                <Slide {...properties}>
                  {slideImages.map((slideImage, index) => (
                    <Img key={index} src={slideImage.url}></Img>
                  ))}
                </Slide>
              </ImgWrap>
            </Column2>
          </MenuRow>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
};

export default Menu;
