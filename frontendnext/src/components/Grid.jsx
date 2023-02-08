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

const Grid = ({ proprietarios }) => {
  const formatar_data = (dataTempo) => {
    let data = new Date(dataTempo);
    let dataFormatada = ((data.getDate()) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear());
    return dataFormatada;
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Titulo</Th>
          <Th>Descrição</Th>
          <Th>Nome</Th>
          <Th>Data e Hora</Th>
          <Th>Local</Th>
          <Th>Regras</Th>
          {/* <Th>Capacidade</Th>
          <Th>ID - Unidade</Th> */}
          <Th>ID - Gestão</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {proprietarios.map((item, i) => (
          <Tr key={i}>
            <Td width="16%">{item.TITULO}</Td>
            <Td width="20%">{item.DESCRICAO}</Td>
            <Td width="14%">{item.quem_fez_a_denuncia}</Td>
            <Td width="10%">{formatar_data(item.DT_HORA)}</Td>
            <Td width="20%">{item.NOME}</Td>
            <Td width="15%">{item.REGRAS}</Td>
            <Td width="25%">{item.ID_GESTAO}</Td>
            <Td alignCenter width="6%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))
        }
      </Tbody>
    </Table>
  )
}




export { Grid, GridProprietarios };