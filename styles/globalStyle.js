import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');
  * {
    font-family: 'Tajawal', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    &::-webkit-scrollbar {
        width: 10px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #070510;
        border-radius: 10px;
    }
  }

    body {
      overflow: overlay;
    }
`;

export const Container = styled.div``;

export const ContainerStyle = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
