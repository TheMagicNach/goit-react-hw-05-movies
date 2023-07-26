import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: #F31559;
  }
  &.active {
    color: #F31559;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  list-style: none;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #d2fed2;
  position: sticky;
  top: 0;
  z-index: 1000;
`;