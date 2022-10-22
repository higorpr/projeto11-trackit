import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import TodayList from "../../components/TodayList";
import { useContext } from "react";
import ProjectContext from "../../constants/Context";

export default function TodayPage() {
    const { user, setUser } = useContext(ProjectContext);

    return (
        <>
            <NavBar setUser={setUser} user={user}/>
            <StyledPage>
                <PageTitle>Segunda, 17/05</PageTitle>
                <PageP>Nenhum hábito concluído ainda</PageP>
                <TodayList />
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
    align-items: center;
    margin: 70px 0 101px 0;
    padding: 0 17.5px;
    box-sizing: border-box;
`;

const PageTitle = styled.h1`
    font-size: 23px;
    color: #126ba5;
    width: 340px;
    text-align: left;
    font-weight: 400;
    margin-top: 28px;
    line-height: 29px;
`;

const PageP = styled.p`
    font-size: 18px;
    color: #bababa;
    width: 340px;
    text-align: left;
    font-weight: 400;
    line-height: 23px;
`;
