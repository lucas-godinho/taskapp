import styled from 'styled-components';
import { pxToRem } from '../../../style/global';
import { Link } from 'react-router-dom';

import img from '../../../Assets/1.png';

interface AvatarProps {
  img?: number;
}

export const Container = styled(Link)`
  width: calc(100% / 4 - 0.4rem);
  height: ${pxToRem(68)};

  background: ${(props) => props.theme.borderLine};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 0 0.2rem;
  padding: 0.2rem;

  transition: 0.3s;

  text-decoration: none;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};

  background: ${(props) => (props.img ? `url(${img})` : props.theme.secondary)};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BoxCard = styled.div`
  width: calc(100% - 64px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleCard = styled.h2`
  width: 100%;

  font-size: ${pxToRem(18)};
  font-weight: 600;

  color: ${(props) => props.theme.textPrimary};

  text-align: center;
`;

export const SubTitleCard = styled.h3`
  width: 100%;

  font-size: ${pxToRem(14)};
  font-weight: 600;

  color: ${(props) => props.theme.textPrimary};

  text-align: center;
`;

export const ContainerUser = styled.div`
  min-width: 100%;
  height: ${pxToRem(68)};

  background: ${(props) => props.theme.borderLine};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 0 0.2rem;
  padding: 0.2rem;

  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;
