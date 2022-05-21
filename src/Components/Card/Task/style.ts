import styled from 'styled-components';
import { pxToRem } from '../../../style/global';

import { Check2 } from '@styled-icons/bootstrap/';

interface ContainerProps {
  completed?: boolean;
}

export const Container = styled.div<ContainerProps>`
  min-width: 100%;
  height: ${pxToRem(40)};

  background: ${(props) => (props.completed ? props.theme.tertiary : props.theme.borderLine)};
  border: 1px solid
    ${(props) => (props.completed ? props.theme.backgroundContras : props.theme.primary)};
  border-radius: 0.4rem;

  color: ${(props) => (props.completed ? props.theme.background : props.theme.textPrimary)};
  font-size: ${pxToRem(13)};
  font-weight: 600;
  text-transform: capitalize;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0.2rem;
  padding: 0.2rem 0.4rem;

  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.completed ? props.theme.secondary : props.theme.primary)};
  }
`;

export const IconEdit = styled(Check2)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const ButtonEdit = styled.button`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};

  color: ${(props) => props.theme.tertiary};

  background: transparent;
  border: none;

  margin-right: ${pxToRem(10)};

  cursor: pointer;

  transform: 0.3s;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;
