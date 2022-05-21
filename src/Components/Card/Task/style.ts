import styled from 'styled-components';
import { pxToRem } from '../../../style/global';

import { Check2 } from '@styled-icons/bootstrap/';

export const Container = styled.div`
  min-width: 100%;
  height: ${pxToRem(40)};

  background: ${(props) => props.theme.borderLine};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.4rem;

  color: ${(props) => props.theme.textPrimary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0.2rem;
  padding: 0.2rem;

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export const IconEdit = styled(Check2)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const ButtonEdit = styled.button`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};

  color: ${(props) => props.theme.background};

  background: transparent;
  border: none;

  margin-right: ${pxToRem(10)};

  cursor: pointer;

  transform: 0.3s;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;
