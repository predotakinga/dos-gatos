import React from "react";
import { AiFillPhone, AiFillFacebook, AiFillHome } from "react-icons/ai";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  PhoneNumber,
  ImgWrap,
  Img,
} from "./ContactElements";

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  phone,
  img,
  alt,
}) => {
  return (
    <>
      <ContactContainer lightBg={lightBg} id={id}>
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <PhoneNumber darkText={darkText}>
                  <AiFillPhone size={24} style={{ marginRight: "5px" }} />
                  {phone}
                </PhoneNumber>
                <PhoneNumber darkText={darkText}>
                  <AiFillFacebook size={24} style={{ marginRight: "5px" }} />
                  dosgatospl
                </PhoneNumber>
                <Heading lightText={lightText}>Zapraszamy do lokalu</Heading>
                <PhoneNumber darkText={darkText}>
                  {/* <AiFillHome size={24} style={{ marginRight: "5px" }} /> */}
                  ul. Piwna 15, Gliwice
                </PhoneNumber>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
