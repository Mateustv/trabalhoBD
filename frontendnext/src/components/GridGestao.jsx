import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1900px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;


export const GridGestao = ({ gestao, setGestao, setOnEdit }) => {

    const formatar_data = (dataTempo) => {
        let data = new Date(dataTempo);
        let dataFormatada = ((data.getDate()) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear());
        return dataFormatada;
    }

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/gestao/" + id)
            .then(({ data }) => {
                const newArray = gestao.filter((proprietario) => proprietario.ID_GESTAO !== id);
                console.log(newArray)
                setGestao(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>ID - Gestão</Th>
                    <Th>Data de Inicio</Th>
                    <Th>Data de Fim</Th>
                    <Th>Atos</Th>
                    <Th>Estatuto</Th>
                    <Th>CPF - Sindico</Th>
                    <Th>CPF - Subsindico</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {gestao.map((item, i) => (
                    <Tr key={i}>
                        <Td width="8%">{item.ID_GESTAO}</Td>
                        <Td width="10%">{formatar_data(item.DT_INICIO)}</Td>
                        <Td width="10%">{formatar_data(item.DT_FIM)}</Td>
                        <Td width="20%">{item.ATOS}</Td>
                        <Td width="8%">{item.ESTATUTO}</Td>
                        <Td width="15%">{item.CPF_SINDICO}</Td>
                        <Td width="15%">{item.CPF_SUBSINDICO}</Td>
                        <Td alignCenter width="6%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.CPF)} />
                        </Td>
                    </Tr>
                ))
                }
            </Tbody>
        </Table>
    )
}