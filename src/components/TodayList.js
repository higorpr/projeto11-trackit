import { useContext } from "react";
import styled from "styled-components";
import ProjectContext from "../constants/Context";
import TodayCard from "./TodayCard";

export default function TodayList() {
    
const {todayHabits} =useContext(ProjectContext)

    return (
        <StyledList>
            {todayHabits.map((habit) => (
                <TodayCard
                    key={habit.id}
                    habit = {habit}
                />
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    margin-top: 15px;
`;
