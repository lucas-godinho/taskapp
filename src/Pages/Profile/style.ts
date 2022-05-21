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
