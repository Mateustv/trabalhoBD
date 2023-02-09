import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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
  flex-wrap:wrap;
  max-width:1400px ;
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


export const FormGestao = ({ onEdit, setOnEdit, getGestao }) => {
    const ref = useRef();

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);

    };
    console.log(file)

    const handleOnEdit = () => {
        setOnEdit(null)
        const user = ref.current;
        user.id_gestao.value = "";
        user.dt_inicio.value = "";
        user.dt_fim.value = "";
        user.atos.value = "";
        user.estatuto.value = "";
        user.cpf_sindico.value = "";
        user.cpf_subsindico.value = "";
    }

    const formatar_data = (dataTempo) => {
        let data = new Date(dataTempo);
        let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));
        return dataFormatada;
    }

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;
            user.id_gestao.value = onEdit.ID_GESTAO;
            user.dt_inicio.value = formatar_data(onEdit.DT_INICIO);
            user.dt_fim.value = formatar_data(onEdit.DT_FIM);
            user.atos.value = onEdit.ATOS;
            //            user.estatuto.value = onEdit.ESTATUTO;
            user.cpf_sindico.value = onEdit.CPF_SINDICO;
            user.cpf_subsindico.value = onEdit.CPF_SUBSINDICO;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.id_gestao.value ||
            !user.dt_inicio.value ||
            !user.dt_fim.value ||
            !user.atos.value ||
            !user.estatuto.value ||
            !user.cpf_sindico.value ||
            !user.cpf_subsindico.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }
        if (onEdit) {
            await axios
                .put("http://localhost:8800/gestao/" + onEdit.ID_GESTAO, {
                    id_gestao: user.id_gestao.value,
                    dt_inicio: formatar_data(user.dt_inicio.value),
                    dt_fim: formatar_data(user.dt_fim.value),
                    atos: user.atos.value,
                    estatuto: user.estatuto.value,
                    cpf_sindico: user.cpf_sindico.value,
                    cpf_subsindico: user.cpf_subsindico.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/gestao", {
                    id_gestao: user.id_gestao.value,
                    dt_inicio: formatar_data(user.dt_inicio.value),
                    dt_fim: formatar_data(user.dt_fim.value),
                    atos: user.atos.value,
                    estatuto: user.estatuto.value,
                    cpf_sindico: user.cpf_sindico.value,
                    cpf_subsindico: user.cpf_subsindico.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.id_gestao.value = "";
        user.dt_inicio.value = "";
        user.dt_fim.value = "";
        user.atos.value = "";
        user.estatuto.value = "";
        user.cpf_sindico.value = "";
        user.cpf_subsindico.value = "";

        setOnEdit(null);
        getGestao();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <H3>Gestão</H3>
            <InputArea>
                {onEdit ?
                    <>
                        <Label>Id - Gestão</Label>
                        <Input name="id_gestao" disabled />
                    </>
                    :
                    <>
                        <Label>Id - Gestão</Label>
                        <Input name="id_gestao" />
                    </>
                }
                <Label>Data de Inicio</Label>
                <Input name="dt_inicio" />
                <Label>Data de Fim</Label>
                <Input name="dt_fim" />
                <Label>Atos</Label>
                <Input name="atos" />
                <Label>Estatuto</Label>
                <input name="estatuto" type="file" onChange={handleFileChange} />
                <Label>CPF - Sindico</Label>
                <Input name="cpf_sindico" />
                <Label>CPF - Subsindico</Label>
                <Input name="cpf_subsindico" />
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
