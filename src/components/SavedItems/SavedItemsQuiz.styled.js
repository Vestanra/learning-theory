import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
margin: 24px auto;
height: 420px;
font-size: 18px;
padding: 32px 24px;
border: 1px solid #F2F2EF;
border-radius: 10px;

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