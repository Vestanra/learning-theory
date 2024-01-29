import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 24px;
margin-top: 24px;
font-size: 16px;
@media (max-width: 767px){
    gap: 16px;
    width: (100% - 48px) / 2;
    flex-wrap: wrap;
  }
`; 

export const Link = styled(NavLink)`
display: flex;
width: 120px;
height: 40px;
border-radius: 4px;
border: none;
justify-content: center;
align-items: center;
background-color: ${props => props.color || 'red'};
transition-property: transform;
transition-duration: 0.3s;
text-decoration: none;
color: black;
font-weight: 500;

@media (max-width: 767px){
    height: 28px;    
  }
  &:hover {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &.active {
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    color: white;
    transform: scale(1.2, 1.2);

    @media (max-width: 767px){
    font-size: 14px;
    transform: scale(1, 1.2);
  }
  }
`;