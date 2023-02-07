import styled from "styled-components";
import React, { useEffect, useRef } from "react";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center ;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  flex-direction: row;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
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

const Label = styled.label``;

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
            <InputArea>
                <H3>Ocorrência</H3>
            </InputArea>
            <InputArea>
                <Label>Titulo</Label>
                <Input name="titulo" />
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="descricao" />
            </InputArea>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Data e Hora</Label>
                <Input name="dt_hora" />
            </InputArea>
            <H3>Areas Comuns</H3>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome_area" />
            </InputArea>
            <InputArea>
                <Label>Regras</Label>
                <Input name="regras" />
            </InputArea>
            <InputArea>
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