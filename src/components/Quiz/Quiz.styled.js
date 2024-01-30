import styled from "styled-components";

export const Container = styled.div`
margin: 24px auto;
height: 420px;
font-size: 18px;
padding: 12px 24px;
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

export const Wrap = styled.div`
height: 300px;
padding: 12px 24px 24px 24px; 
cursor: pointer;

@media (max-width: 767px){
    font-size: 14px;
  }
`;

export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
perspective: 1000px;
display: flex;
line-height: 1.5;
background-color: #F2F4F3;
border: 1px solid #F2F2EF;
border-radius: 10px;
transition: box-shadow 0.3s ease-in-out;
padding: 12px;

&:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
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
transition: box-shadow 0.3s ease-in-out;
@media (max-width: 767px){
    width: 96px; 
    height: 36px;
  }

&:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`
export const ButtonSvg = styled.button`
display: block;
border: none;
background-color: white;
padding: 0;
padding-right: 24px;
margin-left: auto;

svg {
    fill: #609786;
    width: 32px; 
    height: 32px;

    @media (max-width: 767px){
    width: 24px; 
    height: 24px;
  }
  }
`
export const Text = styled.div`
display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
  text-align: center;
`;


