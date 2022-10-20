import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useContext, useState } from "react";
import styled from "styled-components";
import SaveHabitsCard from "../../components/SaveHabitsCard";
import HabitsList from "../../components/HabitsList";

export default function HabitsPage() {
    const [saveHabit, setSaveHabit] = useState(false);
    const [habits, setHabits] = useState(undefined);

    return (
        <>
            <NavBar />
            <StyledPage>
                <TopContainer>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </TopContainer>
                <MidContainer>
                    {saveHabit === true && <SaveHabitsCard />}
                </MidContainer>
                <LowerContainer>
                    {habits ? (
                        <p>
                            Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a acompanhá-lo!
                        </p>) : 
                        (<HabitsList />
                    )}
                </LowerContainer>
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

    img {
        margin: 68px 0 36.6px 0;
    }
`;

const TopContainer = styled.div`
    color: #126ba5;
    font-size: 23px;
    line-height: 28.7px;
    display: flex;
    justify-content: space-between;
    padding: 22px 18px 0 18px;
    width: 100vw;
    box-sizing: border-box;
    align-items: center;

    button {
        background-color: #52b6ff;
        color: white;
        width: 40px;
        height: 35px;
        border-radius: 4.6px;
    }
`;

const MidContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LowerContainer = styled.div`
    display: flex;
    padding: 28px 20px;
    box-sizing: border-box;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
`;
