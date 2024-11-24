import styled from "styled-components";


export const Add = styled.button`
  background-color: #00bcd4; 
  color: white;
  border: none;
  padding: 12px 20px; 
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #0097a7; 
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 25px; 
    font-size: 24px; 
  }
`;



export const Delete = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  width: auto;

  &:hover {
    background-color: #e53935; 
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;}
`;

export const Deleteall = styled.button`
  background-color: #f44336; 
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #e53935; 
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 25px;
    font-size: 24px;
  }
`;
