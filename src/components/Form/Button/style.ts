import styled from 'styled-components';

import { Sun, Moon } from '@styled-icons/boxicons-regular/';
import { pxToRem } from '../../../style/global';

interface ButtonProps {
  isDark?: boolean;
}

export const IconLight = styled(Sun)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const IconDark = styled(Moon)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const Container = styled.button<ButtonProps>`
  width: ${pxToRem(80)};
  height: ${pxToRem(30)};

  background: ${(props) => props.theme.primary};

  border: none;
  border-radius: ${pxToRem(8)};

  color: ${(props) => props.theme.textPrimary};

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.9rem;
`;
