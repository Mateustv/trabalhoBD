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


export const GridAreasComuns = ({ areasComuns, setAreasComuns, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/areascomuns/" + id)
            .then(({ data }) => {
                const newArray = areasComuns.filter((proprietario) => proprietario.ID_AREA !== id);
                setAreasComuns(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id - Area</Th>
                    <Th>Nome</Th>
                    <Th>Regras</Th>
                    <Th>Capacidade</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {areasComuns.map((item, i) => (
                    <Tr key={i}>
                        <Td width="8%">{item.ID_AREA}</Td>
                        <Td width="17%">{item.NOME}</Td>
                        <Td width="17%">{item.REGRAS}</Td>
                        <Td width="8%">{item.CAPACIDADE}</Td>
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
