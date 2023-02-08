import styled from "styled-components";
import React, { useEffect, useRef } from "react";

const FormContainer = styled.form`
  display: block;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
const H3 = styled.h3`
`;

const Label = styled.label`
padding-right:10px ;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ OnEdit }) => {
  const ref = useRef();
  return (
    <FormContainer>
      <H3>Ocorrência</H3>
      <InputArea>
        <Label>Titulo</Label>
        <Input name="titulo" />
        <Label>Descrição</Label>
        <Input name="descricao" />
        <Label>Nome</Label>
        <Input name="nome" />
        <Label>Data e Hora</Label>
        <Input name="dt_hora" type="date" />
      </InputArea>
      <H3>Areas Comuns</H3>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome_area" />
        <Label>Regras</Label>
        <Input name="regras" />
        <Label>Capacidade</Label>
        <Input name="capacidade" />
      </InputArea>
      <H3>Unidade</H3>
      <InputArea>
        <Label>ID - Unidade</Label>
        <Input name="id_unidade" />
      </InputArea>
      <H3>Gestão</H3>
      <InputArea>
        <Label>ID - Gestão</Label>
        <Input name="id_gestao" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>

  );

};

export default Form;