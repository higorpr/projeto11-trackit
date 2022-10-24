import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SaveHabitsCard from "../../components/SaveHabitsCard";
import HabitsList from "../../components/HabitsList";
import ProjectContext from "../../constants/Context";
import axios from "axios";
import { habitsUrl } from "../../constants/Urls";

export default function HabitsPage() {
    const [saveHabit, setSaveHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const [habit, setHabit] = useState({ name: "", days: [] });
    const { user } = useContext(ProjectContext);
    

    useEffect(() => {
        getHabits();
    });

    function getHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        axios
            .get(habitsUrl, config)
            .then((res) => {
                const habitList = res.data;
                setHabits(habitList);
            })
            .catch((err) => {
                console.log(err.response.data);
                alert(err.response.data.message)
            });
    }

    return (
        <>
            <NavBar/>
            <StyledPage >
                <TopContainer>
                    <p>Meus hábitos</p>
                    <button onClick={() => setSaveHabit(true)}>+</button>
                </TopContainer>
                <MidContainer>
                    {saveHabit === true && (
                        <SaveHabitsCard
                            setSaveHabit={setSaveHabit}
                            habit={habit}
                            setHabit={setHabit}
                            getHabits={getHabits}
                        />
                    )}
                </MidContainer>
                <LowerContainer>
                    {habits.length === 0 ? (
                        <p>
                            Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a acompanhá-lo!
                        </p>
                    ) : (
                        <HabitsList habits={habits} setHabits={setHabits} getHabits={getHabits}/>
                    )}
                </LowerContainer>
            </StyledPage>
            <Footer />
        </>
    );
}

const StyledPage = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 0 0px 0;
    padding-bottom: 90px;
    box-sizing: border-box;

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
