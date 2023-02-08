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
  margin-right:10px;
  margin-top:10px ;
`;


export const FormProprietario = ({ onEdit, setOnEdit, getProprietarios }) => {
    const ref = useRef();

    const formatar_data = (dataTempo) => {
        let data = new Date(dataTempo);
        let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));
        return dataFormatada;
    }

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;
            user.cpf.value = onEdit.CPF;
            user.nome.value = onEdit.NOME;
            user.telefone.value = onEdit.TELEFONE;
            user.email.value = onEdit.EMAIL;
            user.dt_nascimento.value = formatar_data(onEdit.DT_NASCIMENTO);
            user.status.value = onEdit.STATUS;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

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
        //    console.log(onEdit)
        if (onEdit) {
            await axios
                .put("http://localhost:8800/proprietarios/" + onEdit.CPF, {
                    cpf: user.cpf.value,
                    nome: user.nome.value,
                    telefone: user.telefone.value,
                    email: user.email.value,
                    dt_nascimento: formatar_data(user.dt_nascimento.value),
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
                    dt_nascimento: formatar_data(user.dt_nascimento.value),
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
