import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export default function TodayCard({ name, isDone, ongoing, record }) {
    // let backgroundIconColor = '#8fc549';
let backgroundIconColor = '#E7E7E7';
    return (
        <StyledEntry>
            <CardText>
                <CardTitle>{name}</CardTitle>
                <CardP>Sequência atual: {ongoing} dias</CardP>
                <CardP>Seu recorde: {record} dias</CardP>
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
    background-color: ${props => props.backgroundIconColor};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
