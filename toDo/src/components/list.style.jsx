import styled from "styled-components";


export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 450px; 
  }
`;

export const Tarea = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px; 
  }
`;


export const Span = styled.span`
  font-size: 16px;
  color: #333;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
  }
`;
