import styled from "styled-components";

export const Container = styled.article`
  margin: 3rem auto;
  max-width: 60%;
  width: 100%;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
  border-radius: 10px;
`;

export const Flag = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
  img {
    max-width: 100%;
    width: 400px;
  }
`;

export const Country = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
`;
