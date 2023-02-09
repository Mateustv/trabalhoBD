import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FormProprietario } from "@/components/FormProprietarios";
import { GridProprietarios } from "@/components/GridProprietarios";
import { FormGestao } from "@/components/FormGestao";
import { GridGestao } from "@/components/GridGestao";



const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Title = styled.h2``;

export default function gestao() {
    const [gestao, setGestao] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    // const [src, setSrc] = useState(null);

    const handleBlob = (dado) => {
        dado.map((item, i) => {
            if (item.ESTATUTO != null) {
                const data = new Uint8Array(item.ESTATUTO);
                const blob = new Blob([data], { type: "application/octet-stream" })
                const src = URL.createObjectURL(blob)
                item.ESTATUTO = src
            }
        })
    }

    const getGestao = async () => {
        try {
            const res = await axios.get("http://localhost:8800/gestao");
            const dado = res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
            console.log(dado)
            handleBlob(dado);
            setGestao(dado);
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getGestao();
    }, [setGestao]);
    return (
        <>
            <Container>
                <Title>Gestão</Title>
                <FormGestao setOnEdit={setOnEdit} onEdit={onEdit} getGestao={getGestao} />
                <GridGestao gestao={gestao} setGestao={setGestao} setOnEdit={setOnEdit} />
                <Button><a href="/">Voltar</a></Button>
            </Container>

            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        </>
    )
}