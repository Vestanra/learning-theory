import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center; 
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

export const Wrap = styled.div`
height: 260px;
padding: 24px; 
margin-bottom: 24px;
margin-top: 24px;
cursor: pointer;
background-color: white;
overflow: auto;
@media (min-width: 1440px) {
    width: 700px;
  }
@media (min-width: 768px) and (max-width: 1439px){
    width: 660px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 280px;
    font-size: 14px;
  }
`;

export const Card = styled.div`
width: 100%;
height: 100%;
position: relative;
perspective: 1000px;
display: flex;
justify-content: center;
align-items: center;
text-align: center; 
line-height: 1.5;
`;

export const ButtonsWrap = styled.div`
display: flex;
justify-content: center;
gap: 24px;
`;

export const Button = styled.button`
display: flex;
width: 120px;
height: 40px;
border-radius: 4px;
border: none;
justify-content: center;
align-items: center;
`

