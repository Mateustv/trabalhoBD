import GlobalStyle from "../styles/global";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";


const Container = styled.div`
  width: 100%;
  max-width: 2200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;


export default function Home() {
  return (
    <>
      <Container>
        <ul>
          <li><a href="/proprietarios">Proprietarios</a></li>
          <li><a href="/unidades">Unidades</a></li>
          <li><a href="/gestao">Gestão</a></li>
          <li><a href="/areasComuns">Areas Comuns</a></li>
          <li><a href="/ocorrencias">Ocorrencias</a></li>
        </ul>
      </Container>
      <GlobalStyle />
    </>
  )
}
