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


export const FormAreasComuns = ({ onEdit, setOnEdit, getAreasComuns }) => {
    const ref = useRef();

    const handleOnEdit = () => {
        setOnEdit(null)
        const user = ref.current;
        user.id_area.value = "";
        user.nome.value = "";
        user.regras.value = "";
        user.capacidade.value = "";
    }

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;
            user.id_area.value = onEdit.ID_AREA;
            user.nome.value = onEdit.NOME;
            user.regras.value = onEdit.REGRAS;
            user.capacidade.value = onEdit.CAPACIDADE;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = ref.current;

        if (
            !user.id_area.value ||
            !user.nome.value ||
            !user.regras.value ||
            !user.capacidade.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }
        if (onEdit) {
            await axios
                .put("http://localhost:8800/areascomuns/" + onEdit.ID_AREA, {
                    id_area: user.id_area.value,
                    nome: user.nome.value,
                    regras: user.regras.value,
                    capacidade: user.capacidade.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/areascomuns", {
                    id_area: user.id_area.value,
                    nome: user.nome.value,
                    regras: user.regras.value,
                    capacidade: user.capacidade.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.id_area.value = "";
        user.nome.value = "";
        user.regras.value = "";
        user.capacidade.value = "";

        setOnEdit(null);
        getAreasComuns();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <H3>Areas Comuns</H3>
            <InputArea>
                {onEdit ?
                    <>
                        <Label>Id - Area</Label>
                        <Input name="id_area" disabled />
                    </>
                    :
                    <>
                        <Label>Id - Area</Label>
                        <Input name="id_area" />
                    </>
                }
                <Label>Nome</Label>
                <Input name="nome" />
                <Label>Regras</Label>
                <Input name="regras" />
                <Label>Capacidade</Label>
                <Input name="capacidade" />
            </InputArea>
            <Button type="submit">SALVAR</Button>
            {onEdit ?
                <>
                    <Button onClick={() => handleOnEdit()}>Cancelar Edição</Button>
                </>
                :
                <>
                    {""}
                </>
            }

        </FormContainer>

    );

};