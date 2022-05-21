import styled from 'styled-components';
import { pxToRem } from '../../style/global';

import { DiffAdded } from '@styled-icons/octicons/';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;
`;

export const BoxProfile = styled.div`
  min-width: ${pxToRem(980)};
  max-width: ${pxToRem(980)};
  height: 100%;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const IconDiffAdded = styled(DiffAdded)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  color: ${(props) => props.theme.textPrimary};
`;

export const ButtonAction = styled.button`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};

  background: transparent;

  border: none;
  border-radius: 0.4rem;

  margin: 0.5rem 0%;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.primary};

    &::after {
      content: 'Adicionar Tarefa';

      width: 120px;
      height: 20px;

      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.textPrimary};

      padding: 0.2rem;

      border-radius: 0.4rem;

      position: absolute;
      top: 10px;
      left: -130px;

      display: block;
    }
  }
`;

export const Action = styled.div`
  width: ${pxToRem(50)};
  height: auto;

  background: ${(props) => props.theme.borderLine};

  border: ${pxToRem(1)} solid ${(props) => props.theme.primary};
  border-radius: 0.8rem;

  position: absolute;
  left: ${pxToRem(-50)};
  top: ${pxToRem(100)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
