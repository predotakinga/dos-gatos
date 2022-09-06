import React from "react";
import Pdf from "../../images/menu.pdf";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
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
} from "./InfoElements";

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

const Info = ({
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
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
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
