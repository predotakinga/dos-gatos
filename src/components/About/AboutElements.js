import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 800px;
  display: grid;
  flex-directiion: column;
  justify-content: center;
  align-items: center;
  background: #ded9d3;
  // background-image: url("https://images.pexels.com/photos/7131751/pexels-photo-7131751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-width: 500px;
  }
`;

export const AboutCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AboutIcon = styled.img`
  height: 10rem;
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AboutH1 = styled.h1`
  font-size: 4rem;
  font-family: magilio;
  color: #000;
  // margin-bottom: 14px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: Magilio;
`;

export const AboutP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: Montserrat;
`;

// export const TopLine = styled.p`
//   color: #01bf71;
//   font-size: 20px;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   margin-bottom: 16px;
//   font-family: "Montserrat", sans-serif;

//   @media screen and (max-width: 768px) {
//     padding-top: 30px;
//   }
// `;

// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 68px;
//   line-height: 1.1;
//   font-weight: 600;
//   font-family: Magilio;
//   color: ${({ lightText }) => (lightText ? "#f7f8fa" : "010606")};

//   @media screen and (max-width: 480px) {
//     font-size: 32px;
//   }
// `;

// export const TextWrapper = styled.div`
//   //   max-width: 540px;
//   padding-top: 0;
//   padding-bottom: 60px;
//   text-align: center;
// `;

// export const CardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
//   gap: 3rem;
//   justify-content: center;
//   text-align: center;
// `;

// export const Card = styled.div`
//   overflow: hidden;
//   box-shadow: 0 2px 20px #292929;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   cursor: pointer;
//   transition: transform 200ms ease-in;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// export const CardBody = styled.div``;

// export const Img = styled.img`
//   height: 12rem;
//   width: 100%;
//   padding-bottom: 20px;
//   object-fit: cover;
// `;

// export const CardTitle = styled.h2`
//   color: #fff;
//   padding: 1rem;
// `;

// export const CardDesc = styled.p`
//   color: #fff;
//   padding: 0 1rem;
// `;
