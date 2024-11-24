
import styled from "styled-components";

export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Altura predeterminada */
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 500px;
  margin: 50px auto;

  /* Líneas decorativas */
  &:before {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #ddd;
    margin-bottom: 20px;
  }

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #ddd;
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40vh; /* Reducir altura en tablets */
    padding: 30px; /* Aumentar el padding */
    margin: 80px auto; /* Centrando en tablets */
    max-width: 450px; /* Reducir el ancho */
  }
`;



// Título principal
export const Title = styled.h1`
  font-size: 42px;
  color: #333;
  margin-bottom: 20px;
`;

// Header (contenedor del input y el botón Add)
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Ancho uniforme */
  gap: 10px; /* Espaciado entre el input y el botón */
`;

// Input de tarea
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 25px; /* Más grande */
    font-size: 24px;
  }
`;
