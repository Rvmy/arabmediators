import styled from "styled-components";
import { keyframes } from "styled-components";

const animate1 = keyframes`
 0% {
     transform: translateX(-100%);
 } 

 100% {
    transform: translateX(100%);
 }
`;

const animate2 = keyframes`
 0% {
     transform: translateY(-100%);
 } 

 100% {
    transform: translateY(100%);
 }
`;

const animate3 = keyframes`
 0% {
     transform: translateX(100%);
 } 

 100% {
    transform: translateX(-100%);
 }
`;

const animate4 = keyframes`
 0% {
     transform: translateY(100%);
 } 

 100% {
    transform: translateY(-100%);
 }
`;

export const CardStyle = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #ffffff0d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  opacity: 0.5;

  :before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  span {
    transition: 0.5s;
    opacity: 0;

    :nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, transparent, #701840);
      animation: ${animate1} 2s linear infinite;
    }

    :nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to bottom, transparent, #701840);
      animation: ${animate2} 2s linear infinite;
      animation-delay: 1s;
    }

    :nth-child(3) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to left, transparent, #701840);
      animation: ${animate3} 2s linear infinite;
      animation-delay: 2s;
    }

    :nth-child(4) {
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to top, transparent, #701840);
      animation: ${animate4} 2s linear infinite;
      animation-delay: 1s;
    }
  }

  :hover {
    opacity: 1;
    span {
      opacity: 1;
    }

    .content {
      h2 {
        opacity: 1;
        transform: translateY(-70px);
      }

      h3 {
        opacity: 1;
      }

      p {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 30px;
  text-align: center;
  h2 {
    position: absolute;
    right: 30px;
    font-size: 4em;
    font-weight: 800;
    color: #701840;
    z-index: 1;
    opacity: 0.1;
    transition: 0.5s;
  }

  h3 {
    position: relative;
    font-size: 1.5em;
    color: #fff;
    z-index: 2;
    opacity: 0.5;
    letter-spacing: 1px;
    transition: 0.5s;
  }

  p {
    color: #fff;
  }
`;
