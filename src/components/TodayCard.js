import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import axios from "axios";
import { useContext, useState } from "react";
import ProjectContext from "../constants/Context";
import { habitsUrl } from "../constants/Urls";

export default function TodayCard({ habit }) {
    const { id, name, done, currentSequence, highestSequence } = habit;
    const { user, getTodayHabits } = useContext(ProjectContext);

    let grey = "#666666";
    let green = "#8FC549";
    let colorHighest;
    let colorCurrent;

    let backgroundIconColor = "#E7E7E7";
    if (done === true) {
        backgroundIconColor = green;
        colorCurrent = green;
    }

    function checkClick() {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        if (done !== true) {
            const url = habitsUrl + `/${id}/check`;
            axios
                .post(url, {}, config)
                .then((res) => {
                    colorCurrent = green;
                    getTodayHabits();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const url = habitsUrl + `/${id}/uncheck`;
            axios
                .post(url, {}, config)
                .then((res) => {
                    colorCurrent = grey;
                    getTodayHabits();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    if (done === true) {
        if (currentSequence >= highestSequence) {
            colorHighest = green;
        } else {
            colorHighest = grey;
        }
    }

    return (
        <StyledEntry onClick={checkClick}>
            <CardText>
                <CardTitle>{name}</CardTitle>
                <CardP>
                    Sequência atual:{" "}
                    <ControlSpanCurrent color={colorCurrent}>
                        {currentSequence} {currentSequence > 1 ? "dias" : "dia"}{" "}
                    </ControlSpanCurrent>
                </CardP>
                <CardP>
                    Seu recorde:{" "}
                    <ControlSpanCurrent color={colorHighest}>
                        {highestSequence} {highestSequence > 1 ? "dias" : "dia"}{" "}
                    </ControlSpanCurrent>
                </CardP>
            </CardText>
            <CheckIcon backgroundIconColor={backgroundIconColor}>
                <IconContext.Provider
                    value={{ size: "35px", color: "#ffffff" }}
                >
                    <BsCheckLg />
                </IconContext.Provider>
            </CheckIcon>
        </StyledEntry>
    );
}

const StyledEntry = styled.li`
    width: 340px;
    height: 94px;
    background-color: #ffffff;
    padding: 13px 13px 13px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 5px;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: #666666;
`;

const CardTitle = styled.h1`
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    margin-bottom: 7px;
`;

const CardP = styled.p`
    font-size: 13px;
    line-height: 16.22px;
    font-weight: 400;
`;

const CheckIcon = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${(props) => props.backgroundIconColor};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ControlSpanCurrent = styled.span`
    color: ${(props) => props.color};
`;
const ControlSpanHighest = styled.span`
    color: ${(props) => props.color};
`;
