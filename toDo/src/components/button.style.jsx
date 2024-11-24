import styled from "styled-components";

// Botón Añadir (Add)
export const Add = styled.button`
  background-color: #00bcd4; /* Celeste */
  color: white;
  border: none;
  padding: 12px 20px; /* Tamaño inicial */
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #0097a7; /* Color más oscuro al pasar el ratón */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 25px; /* Aumentar tamaño de botones */
    font-size: 24px; /* Texto más grande */
  }
`;


// Botón Borrar (Delete)
export const Delete = styled.button`
  background-color: #f44336; /* Rojo */
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  width: auto;

  &:hover {
    background-color: #e53935; /* Rojo oscuro al pasar el ratón */
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;}
`;

export const Deleteall = styled.button`
  background-color: #f44336; /* Rojo */
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #e53935; /* Rojo más oscuro */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 25px; /* Botón más grande */
    font-size: 24px;
  }
`;
