import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FormAreasComuns } from "@/components/FormAreasComuns";
import { GridAreasComuns } from "@/components/GridAreasComuns";



const Container = styled.div`
  width: 100%;
  max-width: 2200px;
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

export default function areasComuns() {
    const [areasComuns, setAreasComuns] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getAreasComuns = async () => {
        try {
            const res = await axios.get("http://localhost:8800/areascomuns");
            setAreasComuns(res.data.sort((a, b) => (a.nome > b.nome ? -1 : 1)));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getAreasComuns();
    }, [setAreasComuns]);
    return (
        <>
            <Container>
                <Title>Areas Comuns</Title>
                <FormAreasComuns setOnEdit={setOnEdit} onEdit={onEdit} getAreasComuns={getAreasComuns} />
                <GridAreasComuns areasComuns={areasComuns} setAreasComuns={setAreasComuns} setOnEdit={setOnEdit} />
                <Button><a href="/">Voltar</a></Button>
            </Container>

            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        </>
    )
}