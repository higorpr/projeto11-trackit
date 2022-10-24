import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import TodayList from "../../components/TodayList";
import { useContext, useEffect } from "react";
import ProjectContext from "../../constants/Context";
import dayjs from "dayjs";
import { ptWeek } from "../../constants/constants";

export default function TodayPage() {
    const { todayHabits, getTodayHabits, progress } = useContext(ProjectContext);
    const now = dayjs();
    const weekday = require("dayjs/plugin/weekday");
    dayjs.extend(weekday);

    useEffect(() => {
        getTodayHabits();
    }, []);

    return (
        <>
            <NavBar />
            <StyledPage>
                <PageTitle>{`${
                    ptWeek[now.weekday()]
                }, ${now.date()}/${now.month()}`}</PageTitle>
                <PageP>
                    {todayHabits.length !== 0 ? (
                        <ControlledSpan>{(progress*100).toFixed(1)}% dos hábitos concluídos</ControlledSpan>
                    ) : (
                        <>Nenhum hábito concluído ainda</>
                    )}
                </PageP>
                <TodayList />
            </StyledPage>
            <Footer />
        </>
    );
}

const StyledPage = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 0 101px 0;
    padding: 0 17.5px;
    box-sizing: border-box;
`;

const PageTitle = styled.h1`
    font-size: 23px;
    color: #126ba5;
    width: 340px;
    text-align: left;
    font-weight: 400;
    margin-top: 28px;
    line-height: 29px;
`;

const PageP = styled.p`
    font-size: 18px;
    color: #bababa;
    width: 340px;
    text-align: left;
    font-weight: 400;
    line-height: 23px;
`;

const ControlledSpan = styled.span`
    color: #8fc549;
`;
