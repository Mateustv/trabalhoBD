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


export const GridProprietarios = ({ proprietarios, setProprietarios, setOnEdit }) => {
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
            .delete("http://localhost:8800/proprietarios/" + id)
            .then(({ data }) => {
                const newArray = proprietarios.filter((proprietario) => proprietario.CPF !== id);
                console.log(newArray)
                setProprietarios(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>CPF</Th>
                    <Th>Nome</Th>
                    <Th>Telefone</Th>
                    <Th>E-mail</Th>
                    <Th>Data de Nascimento</Th>
                    <Th>Status</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {proprietarios.map((item, i) => (
                    <Tr key={i}>
                        <Td width="16%">{item.CPF}</Td>
                        <Td width="20%">{item.NOME}</Td>
                        <Td width="14%">{item.TELEFONE}</Td>
                        <Td width="20%">{item.EMAIL}</Td>
                        <Td width="20%">{formatar_data(item.DT_NASCIMENTO)}</Td>
                        <Td width="15%">{item.STATUS}</Td>
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