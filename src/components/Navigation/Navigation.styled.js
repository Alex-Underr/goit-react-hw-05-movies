import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 18px;
  color: #262727;
  font-size: 18px;
  &.active {
    color: #148fbb;
    background-color: wheat;
    border: 1px solid black;
    border-radius: 5px;
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #12a3a3;
  }
`;
