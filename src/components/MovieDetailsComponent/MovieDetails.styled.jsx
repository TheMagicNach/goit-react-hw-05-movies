import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  
  border-radius: 9px;
  box-shadow: -2px -2px 8px 8px rgba(0, 0, 0, 0.3);

`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 8px;
  cover: fit;
`;

export const MovieInfoContainer = styled.div`
  flex-direction: column;
`;

export const MovieScore = styled.p`
  width: 200px;
`;

export const MovieOverview = styled.p`
  width: 500px;
`;

export const AditionalInfoContainer = styled.div`
margin-top: 20px;
padding: 20px;
border-radius: 8px;
box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.3);
`;


export const ButtonTrailer = styled.button`
  margin-top: 20px;
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