import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.ul`
display: flex;
gap: 24px;
font-size: 18px;
font-weight: 500;
justify-content: space-between;
`;

export const Link = styled(NavLink)`
  padding: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 708px;
    font-size: 20px;
  }

  &.active {
    color: #609786;
    font-weight: 600;
  }
`;