import React from "react";
import Icon1 from "../../images/cook.jpg";
import Icon2 from "../../images/dinner2.jpg";
import Icon3 from "../../images/salsas.jpg";
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutIcon,
  AboutH2,
  AboutP,
} from "./AboutElements";

const About = ({
  H1,
  H2One,
  H2Two,
  H2Three,
  POne,
  PTwo,
  PThree,
  lightText,
}) => {
  return (
    <AboutContainer id="about">
      <AboutH1>{H1}</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon src={Icon1} />
          <AboutH2>{H2One}</AboutH2>
          <AboutP>{POne}</AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon2} />
          <AboutH2>{H2Two}</AboutH2>
          <AboutP>{PTwo}</AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon3} />
          <AboutH2>{H2Three}</AboutH2>
          <AboutP>{PThree}</AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
