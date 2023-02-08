import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

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

const FormOcorrencias = ({ OnEdit }) => {
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

const FormProprietario = ({ onEdit, setOnEdit, getProprietarios }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.cpf.value = onEdit.CPF;
      user.nome.value = onEdit.NOME;
      user.telefone.value = onEdit.TELEFONE;
      user.email.value = onEdit.EMAIL;
      user.dt_nascimento.value = onEdit.DT_NASCIMENTO;
      user.status.value = onEdit.STATUS;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;
    console.log(!user.cpf.value)
    console.log(!user.nome.value)
    console.log(!user.telefone.value)
    console.log(!user.email.value)
    console.log(!user.dt_nascimento.value)
    console.log(!user.status.value)
    if (
      !user.cpf.value ||
      !user.nome.value ||
      !user.telefone.value ||
      !user.email.value ||
      !user.dt_nascimento.value ||
      !user.status.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    console.log(onEdit)
    if (onEdit) {
      await axios
        .put("http://localhost:8800/proprietarios/" + onEdit.CPF, {
          cpf: user.cpf.value,
          nome: user.nome.value,
          telefone: user.telefone.value,
          email: user.email.value,
          dt_nascimento: user.dt_nascimento.value,
          status: user.status.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/proprietarios", {
          cpf: user.cpf.value,
          nome: user.nome.value,
          telefone: user.telefone.value,
          email: user.email.value,
          dt_nascimento: user.dt_nascimento.value,
          status: user.status.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.cpf.value = "";
    user.nome.value = "";
    user.telefone.value = "";
    user.email.value = "";
    user.dt_nascimento.value = "";
    user.status.value = "";

    setOnEdit(null);
    getProprietarios();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <H3>Proprietário</H3>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
        <Label>Nome</Label>
        <Input name="nome" />
        <Label>Telefone</Label>
        <Input name="telefone" />
        <Label>E-mail</Label>
        <Input name="email" type="email" />
        <Label>Data de Nascimento</Label>
        <Input name="dt_nascimento" />
        <Label>Status</Label>
        <Input name="status" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>

  );

};

export { FormOcorrencias, FormProprietario };