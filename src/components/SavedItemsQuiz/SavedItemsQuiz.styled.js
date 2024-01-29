import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 24px auto;
height: 420px;
font-size: 18px;
background-color: lightslategrey;
padding: 32px 24px;

@media (min-width: 1440px) {
    width: 748px;
  }
@media (min-width: 768px) and (max-width: 1439px){
    width: 708px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 328px;
    font-size: 14px;
  }
`;