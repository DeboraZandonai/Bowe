import React from "react";

import {
  Container,
  Title,
  HeadText,
  ContainerText,
  ContainerMain,
  ContainerForm,
  SubTitle,
  Paragraph,
  Form,
  FormSubTitle,
  FormParagraph,
  Select,
  ButtonSubmit,
  ContainerCheckbox,
} from "./styles";

export default function Quotation() {
  return (
    <>
      <Container>
        <ContainerMain>
          <ContainerText>
            <HeadText>Lançamento no brasil</HeadText>
            <Title>Lenovo V14</Title>
            <SubTitle>
              Uma experiência de trabalho <br></br>elevada, todos os dias
            </SubTitle>
            <Paragraph>
              Arquivos pesados e várias abas abertas? Moleza.
              <br></br>
              <br></br>O Lenovo V14 une processadores Intel®, placas
              <br></br>de armazenamento SSD e HDD, tela Full HD de <br></br>14”,
              usabilidade intuitiva, segurança robusta e<br></br> muito mais.
              <br></br>
              <br></br>
              <strong>Faça uma cotação!</strong>
            </Paragraph>
          </ContainerText>

          <ContainerForm>
            <Form>
              <FormSubTitle>
                Preencha seus dados e nos envie. <br></br>
                Em breve, entraremos em contato.
              </FormSubTitle>
              <FormParagraph>
                Ou ligue para <strong>0800 356 6861</strong> e fale com nossos
                consultores.
              </FormParagraph>

              <div>
                <Select name="" id="" required>
                  <option value="">Categoria de produto *</option>
                  <option value="">Categoria de produto 1</option>
                  <option value="">Categoria de produto 2</option>
                </Select>
                <Select name="" id="" required>
                  <option value="">Empresa *</option>
                  <option value="">Empresa 1</option>
                  <option value="">Empresa 2</option>
                </Select>
              </div>

              <div>
                <Select name="" id="" required>
                  <option value="">Motivo de contato*</option>
                  <option value="">Motivo de contato 1</option>
                  <option value="">Motivo de contato 2</option>
                </Select>
                <Select name="" id="" required>
                  <option value="">Estado *</option>
                  <option value="">Estado 1</option>
                  <option value="">Estado 2</option>
                </Select>
              </div>

              <ContainerCheckbox>
                <input type="checkbox" name="" id="" required />
                <p>Confirmo ter aceitado receber comunicações da Lenovo.*</p>
              </ContainerCheckbox>
              <ButtonSubmit type="submit">QUERO COTAR</ButtonSubmit>
              <p>
                *Estes dados podem ser armazenados em um servidor internacional
                pela Lenovo ou em nome da Lenovo, permitindo ser revogada a
                permissão a qualquer momento. Lenovo pode processar os dados,
                conforme descrito na Política de Privacidade.
              </p>
            </Form>
          </ContainerForm>
        </ContainerMain>
      </Container>
    </>
  );
}
