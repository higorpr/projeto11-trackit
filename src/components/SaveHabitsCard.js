import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import DaySave from "./DaySave";
import { habitsUrl } from "../constants/Urls";
import { weekdays } from "../constants/constants";
import { ThreeDots } from "react-loader-spinner";

export default function SaveHabitsCard({
    setSaveHabit,
    user,
    habit,
    setHabit,
    getHabits,
}) {
    const [loading, setLoading] = useState(false);

    function cancelHabit(event) {
        event.preventDefault();
        setSaveHabit(false);
    }

    function saveHabit(event) {
        event.preventDefault();
        setLoading(true);
        const body = { name: habit.name, days: habit.days };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        axios
            .post(habitsUrl, body, config)
            .then((res) => {
                const resetHabit = { name: "", days: [] };
                console.log(res);
                setHabit(resetHabit);
                getHabits();
                setSaveHabit(false);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
                setLoading(false);
            });
    }

    return (
        <StyledCard>
            <form>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    required
                    value={habit.name}
                    onChange={(e) => {
                        setHabit({ ...habit, name: e.target.value });
                    }}
                    disabled={loading}
                />
                <ButtonContainer>
                    {weekdays.map((day, idx) => (
                        <DaySave
                            key={idx}
                            day={day}
                            habit={habit}
                            setHabit={setHabit}
                            loading={loading}
                        />
                    ))}
                </ButtonContainer>
                <LowerContainer>
                    <CancelButton onClick={cancelHabit} disabled={loading}>
                        Cancelar
                    </CancelButton>
                    <SaveButton onClick={saveHabit} disabled={loading}>
                        {loading === true ? (
                            <ThreeDots width="43" height="11" color="#ffffff" />
                        ) : (
                            <p>Salvar</p>
                        )}
                    </SaveButton>
                </LowerContainer>
            </form>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    background-color: white;
    width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 18px 18px 18px 15px;
    box-sizing: border-box;
    margin-top: 22px;

    input {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        text-indent: 11px;
        color: #666666;
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 25px;

        &::placeholder {
            color: #dbdbdb;
        }
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: left;
`;

const LowerContainer = styled.div`
    display: flex;
    margin-top: 29px;
    justify-content: right;
`;

const CancelButton = styled.div`
    color: #52b6ff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SaveButton = styled.div`
    font-size: 20px;
    background-color: #52b6ff;
    color: white;
    font-size: 16px;
    line-height: 20px;
    border-radius: 4.64px;
    width: 84px;
    height: 35px;
    margin-left: 23px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.7;
    }
`;
