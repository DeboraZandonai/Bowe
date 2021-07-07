import styled from "styled-components";
import imagem from "../../images/background.png";

export const Container = styled.div`
  background: transparent url(${imagem}) 0% 0% no-repeat;
  background-size: cover;
  height: 100vh;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  margin-right: 6rem;
  flex-direction: column;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeadText = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
`;

export const Title = styled.h1`
  color: #3e8ddd;
  font-size: 40px;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-weight: normal;
`;

// FORM

export const ContainerForm = styled.div`
  background: #fff;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  border-radius: 3px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  align-items: center;
  justify-content: flex-start;
`;

export const Form = styled.form`
  color: #fff;
  font-weight: normal;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 550px;

  p {
    color: #000000;
    font-size: 12px;
    max-width: 92%;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormSubTitle = styled.h2`
  color: #2a3c46;
  font-weight: bold;
`;

export const FormParagraph = styled.p`
  color: #5f5f5f;
  font-weight: normal;
  font-size: 18px !important;

  strong {
    color: #000;
  }
`;

export const Select = styled.select`
  height: 45px;
  width: 248px;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  margin: 10px;
  color: #5f5f5f;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 42%;
  }
`;

export const ButtonSubmit = styled.button`
  background: #000;
  color: #fff;
  width: 518px;
  height: 50px;
  border-radius: 3px;
  font-size: 20px;
  margin: 1rem auto;
  border: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;
