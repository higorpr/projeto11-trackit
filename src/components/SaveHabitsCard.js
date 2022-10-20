import axios from "axios";
import styled from "styled-components";
import { useEffect } from 'react';
import Day from "./Day";

export default function SaveHabitsCard() {
    const weekdays = [0,1,2,3,4,5,6];

    return (
        <StyledCard>
            <input type="text" placeholder="nome do hábito" />
            <ButtonContainer>
                {weekdays.map((day, idx) => (
                    <Day key={idx} day={day} />
                ))}
            </ButtonContainer>
            <LowerContainer>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            </LowerContainer>
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
`;
