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
  max-width: 1120px;
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

const Grid = ({ ocorrencias }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Titulo</Th>
                    <Th>Descrição</Th>
                    <Th>Nome</Th>
                    <Th>Data e Hora</Th>
                    <Th>Nome</Th>
                    <Th>Regras</Th>
                    <Th>Capacidade</Th>
                    <Th>ID - Unidade</Th>
                    <Th>ID - Gestão</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            {/* <Tbody>
                {ocorrencias.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.titulo}</Td>
                        <Td width="30%">{item.descricao}</Td>
                        <Td width="30%">{item.nome}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash />
                        </Td>
                    </Tr>
                ))
                }
            </Tbody> */}
        </Table>
    )
}

export default Grid;