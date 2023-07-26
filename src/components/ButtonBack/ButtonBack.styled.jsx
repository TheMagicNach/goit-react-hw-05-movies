import styled from 'styled-components';

export const BackButton = styled.button`
  margin-bottom: 15px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: 1px solid;
  border-radius: 50px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 700;

  &:hover {
    background-color: #EFE1D1;
    color: #d32f2f;
  }
`;