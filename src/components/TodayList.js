import styled from "styled-components";
import TodayCard from "./TodayCard";

export default function TodayList() {
    const habitEx = [
        {
            id: 3,
            name: "Acordar",
            done: true,
            currentSequence: 1,
            highestSequence: 1,
        },
        {
            id: 4,
            name: "Acordar",
            done: true,
            currentSequence: 1,
            highestSequence: 1,
        },
        {
            id: 5,
            name: "Acordar",
            done: true,
            currentSequence: 1,
            highestSequence: 1,
        },
    ];
    return (
        <StyledList>
            {habitEx.map((habit) => (
                <TodayCard
                    key={habit.id}
                    name={habit.name}
                    isDone={habit.done}
                    ongoing={habit.currentSequence}
                    record={habit.highestSequence}
                />
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    margin-top: 15px;
`;
