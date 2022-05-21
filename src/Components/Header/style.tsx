import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  color: ${(props) => props.theme.textPrimary};

  border-bottom: 1px solid ${(props) => props.theme.borderLine};
  background: ${(props) => props.theme.background};

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.tertiary};

  text-decoration: none;

  &::after {
    content: '/>';
    color: ${(props) => props.theme.secondary};
    font-size: 1rem;
  }
`;
