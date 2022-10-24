import Day from "./Day";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";
import { weekdays } from "../constants/constants";
import axios from "axios";
import { habitsUrl } from "../constants/Urls";
import { useContext } from "react";
import ProjectContext from "../constants/Context";

export default function Habit({ habit, getHabits }) {
    const { user,getTodayHabits } = useContext(ProjectContext);

    function removeHabit() {
        if (window.confirm("Você gostaria de excluir este hábito?")) {
            const url = habitsUrl + `/${habit.id}`;
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            axios
                .delete(url, config)
                .then((res) => {
                    console.log(res);
                    getHabits();
                    getTodayHabits();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return (
        <li key={habit.id}>
            <p>{habit.name}</p>
            <IconContext.Provider value={{ size: "15px" }}>
                <ReactIcon onClick={removeHabit}>
                    <BsTrash />
                </ReactIcon>
            </IconContext.Provider>
            <ButtonContainer>
                {weekdays.map((day, idx) => (
                    <Day key={idx} day={day} targetDays={habit.days} />
                ))}
            </ButtonContainer>
        </li>
    );
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: left;
`;

const ReactIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;
