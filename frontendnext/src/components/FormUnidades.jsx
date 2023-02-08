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


export const FormUnidades = ({ onEdit, setOnEdit, getUnidades }) => {
    const ref = useRef();

    const handleOnEdit = () => {
        setOnEdit(null)
        const user = ref.current;
        user.id_unidade.value = "";
        user.cpf_proprietario.value = "";
        user.bloco.value = "";
        user.numero.value = "";
        user.num_vaga.value = "";
        user.placa_veiculo.value = "";
    }

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;
            user.id_unidade.value = onEdit.ID_UNIDADE;
            user.cpf_proprietario.value = onEdit.CPF_PROPRIETARIO;
            user.bloco.value = onEdit.BLOCO;
            user.numero.value = onEdit.NUMERO;
            user.num_vaga.value = onEdit.NUM_VAGA;
            user.placa_veiculo.value = onEdit.PLACA_VEICULO;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = ref.current;

        if (
            !user.id_unidade.value ||
            !user.cpf_proprietario.value ||
            !user.bloco.value ||
            !user.numero.value ||
            !user.num_vaga.value ||
            !user.placa_veiculo.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }
        if (onEdit) {
            await axios
                .put("http://localhost:8800/unidades/" + onEdit.ID_UNIDADE, {
                    id_unidade: user.id_unidade.value,
                    cpf_proprietario: user.cpf_proprietario.value,
                    bloco: user.bloco.value,
                    numero: user.numero.value,
                    num_vaga: user.num_vaga.value,
                    placa_veiculo: user.placa_veiculo.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/unidades", {
                    id_unidade: user.id_unidade.value,
                    cpf_proprietario: user.cpf_proprietario.value,
                    bloco: user.bloco.value,
                    numero: user.numero.value,
                    num_vaga: user.num_vaga.value,
                    placa_veiculo: user.placa_veiculo.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.id_unidade.value = "";
        user.cpf_proprietario.value = "";
        user.bloco.value = "";
        user.numero.value = "";
        user.num_vaga.value = "";
        user.placa_veiculo.value = "";

        setOnEdit(null);
        getUnidades();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <H3>Unidades</H3>
            <InputArea>
                {onEdit ?
                    <>
                        <Label>Id - Unidade</Label>
                        <Input name="id_unidade" disabled />
                    </>
                    :
                    <>
                        <Label>Id - Unidade</Label>
                        <Input name="id_unidade" />
                    </>
                }
                <Label>CPF - Proprietario</Label>
                <Input name="cpf_proprietario" />
                <Label>Bloco</Label>
                <Input name="bloco" />
                <Label>Numero</Label>
                <Input name="numero" />
                <Label>Numero de Vaga</Label>
                <Input name="num_vaga" />
                <Label>Placa do Carro</Label>
                <Input name="placa_veiculo" />
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