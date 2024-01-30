import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.ul`
display: flex;
gap: 24px;
font-size: 18px;
font-weight: 500;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #609786;
    font-weight: 700;
    font-size: 20px;
  }
`;