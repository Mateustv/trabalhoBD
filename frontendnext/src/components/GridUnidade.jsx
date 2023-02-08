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


export const GridUnidades = ({ unidades, setUnidades, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/unidades/" + id)
            .then(({ data }) => {
                const newArray = unidades.filter((proprietario) => proprietario.ID_UNIDADE !== id);
                setUnidades(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id - Unidade</Th>
                    <Th>CPF - Proprietario</Th>
                    <Th>Bloco</Th>
                    <Th>Numero</Th>
                    <Th>Numero de Vaga</Th>
                    <Th>Placa do Carro</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {unidades.map((item, i) => (
                    <Tr key={i}>
                        <Td width="6%">{item.ID_UNIDADE}</Td>
                        <Td width="8%">{item.CPF_PROPRIETARIO}</Td>
                        <Td width="4%">{item.BLOCO}</Td>
                        <Td width="4%">{item.NUMERO}</Td>
                        <Td width="6%">{item.NUM_VAGA}</Td>
                        <Td width="5%">{item.PLACA_VEICULO}</Td>
                        <Td alignCenter width="6%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.ID_UNIDADE)} />
                        </Td>
                    </Tr>
                ))
                }
            </Tbody>
        </Table>
    )
}
