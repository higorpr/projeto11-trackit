import { useState } from "react";
import styled from "styled-components";

export default function DaySave({ day, habit, setHabit, loading }) {
    
    const [clicked, setClicked] = useState(false);
    let borderColor = "#d4d4d4";
    let backgroundColor = "#ffffff";
    let color = "#DBDBDB";
    let dayString;

    if (clicked === true || habit.days.includes(day)) {
        borderColor = "#CFCFCF";
        backgroundColor = "#CFCFCF";
        color = "#ffffff";
    }

    switch (day) {
        case 0:
            dayString = "D";
            break;
        case 1:
            dayString = "S";
            break;
        case 2:
            dayString = "T";
            break;
        case 3:
            dayString = "Q";
            break;
        case 4:
            dayString = "Q";
            break;
        case 5:
            dayString = "S";
            break;
        default:
            dayString = "S";
            break;
    }

    function setDay(event) {
        event.preventDefault()
        let days;
        if (habit.days.includes(day) === true) {
            days = habit.days.filter((d) => d !== day);
        } else {
            days = [...habit.days, day];
        }
        setHabit({ ...habit, days: days });        
        setClicked(!clicked);
    }

    return (
        <DayButton
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            color={color}
            onClick={setDay}
            disabled={loading}
        >
            {dayString}
        </DayButton>
    );
}

const DayButton = styled.button`
    margin-left: 4px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.borderColor};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;
