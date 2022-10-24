import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import ProjectContext from "../constants/Context";

export default function Footer() {
    const { progress } = useContext(ProjectContext);

    return (
        <StyledFooter>
            <div>
                <StyledLink to="/habits">
                    <p> Hábitos </p>
                </StyledLink>
            </div>
            <Link to="/today">
                <ProgressBarDiv>
                    <CircularProgressbar
                        value={progress*100}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </ProgressBarDiv>
            </Link>
            <div>
                <StyledLink to="/history">
                    <p> Histórico </p>
                </StyledLink>
            </div>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    box-sizing: border-box;
    z-index: 1;
`;
const ProgressBarDiv = styled.div`
    height: 91px;
    width: 91px;
    bottom: 10px;
    left: 50%;
    margin: 0 0 10px -45.5px;
    position: absolute;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #52b6ff;
`;
