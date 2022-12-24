import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #262727;
  font-size: 18px;
  &.active {
    color: #148fbb;
  }
`;
