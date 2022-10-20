import styled from "styled-components";

export default function Day({ day, targetDays=[] }) {
    let dayString;
    let borderColor = "#d4d4d4";
    let backgroundColor = "#ffffff";
    let color = "#DBDBDB";

    if (targetDays.includes(day)) {
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
    return (
        <DayButton
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            color={color}
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
