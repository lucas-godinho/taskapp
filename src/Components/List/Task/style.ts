import styled from 'styled-components';
import { pxToRem } from '../../../style/global';

import { DiffAdded } from '@styled-icons/octicons/';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FormAddTask = styled.form`
  width: 100%;
  height: ${pxToRem(50)};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InputAddTask = styled.input`
  width: calc(100% - 50px);
  height: ${pxToRem(30)};

  background: transparent;
  border: 1px solid ${(props) => props.theme.borderLine};
  border-radius: 0.4rem;

  &::placeholder {
    padding-left: ${pxToRem(10)};
    font-size: ${pxToRem(12)};
  }
`;

export const ButtonaddTask = styled.button`
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
      top: 75px;
      right: -115px;

      display: block;
    }
  }
`;

export const IconDiffAdded = styled(DiffAdded)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  color: ${(props) => props.theme.textPrimary};
`;
