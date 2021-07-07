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
  Input,
  FormSubTitle,
  FormParagraph,
  Select,
  ButtonSubmit,
} from "./styles";

export default function Contact() {
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
                <Input placeholder="Nome completo *" type="text" required />
                <Input placeholder="CNPJ *" type="text" required />
              </div>

              <div>
                <Input placeholder="E-mail *" type="email" required />
                <Input placeholder="Telefone  *" type="tel" required />
              </div>

              <div>
                <Select name="" id="">
                  <option value="">N° de funcionários *</option>
                  <option value="">N° de funcionários 1</option>
                  <option value="">N° de funcionários 2</option>
                </Select>
                <Select name="" id="">
                  <option value="">Cargos *</option>
                  <option value="">Cargo 1</option>
                  <option value="">Cargo 2</option>
                </Select>
              </div>
              <ButtonSubmit type="submit">ENVIAR</ButtonSubmit>
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
