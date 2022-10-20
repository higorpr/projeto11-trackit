import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useContext } from "react";
import styled from "styled-components";

export default function HistoryPage() {
    return (
        <>
            <NavBar />
            <StyledPage>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </StyledPage>
            <Footer />
        </>
    );
}

const StyledPage = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 70px 0 101px 0;
    padding: 28px 22px 0 17px;
    box-sizing: border-box;

    h1 {
        color: #126BA5;
        font-size: 23px;
        font-weight: 400;
    }

    p {
        color: #666666;
        font-size: 18px;
        margin-top: 17px;
    }
`;
