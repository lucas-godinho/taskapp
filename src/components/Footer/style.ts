import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  color: ${(props) => props.theme.textPrimary};

  border-top: 1px solid ${(props) => props.theme.borderLine};

  display: flex;
  align-items: center;
`;
