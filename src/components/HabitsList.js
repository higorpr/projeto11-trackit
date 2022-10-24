import styled from "styled-components";
import Habit from "./Habit";

export default function HabitsList({habits, getHabits}) {

    

    return (
        <StyledList>
            {habits.map((habit) => (
                <Habit key={habit.id} habit={habit} getHabits={getHabits}/>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        width: 340px;
        height: 91px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 5px;
        position: relative;
        padding: 13px 0 0 14px;
        box-sizing: border-box;

        p {
            margin-bottom: 8px;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
        }
    }
`;


