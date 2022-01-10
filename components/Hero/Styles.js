import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100%;
  padding: 300px 0;
  width: 100%;
  background: linear-gradient(-45deg, #070510, #1a0816, #350e20);
`;

export const InfoRow = styled.div`
  height: 100%;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  user-select: none;
  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }
`;

export const Img = styled.div`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const HeroImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: #fff;
  user-select: none;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ color }) => (color ? color : "#fff")};
  user-select: none;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => (color ? color : "#fff")};
`;
