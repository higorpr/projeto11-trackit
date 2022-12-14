import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectContext from "../constants/Context";

export default function NavBar() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(ProjectContext);

    function reload() {
        if (
            window.confirm(
                "Você gostaria de se desconectar e voltar para a página de login?"
            )
        ) {
            const newUser = {
                email: "",
                password: "",
                name: "",
                image: "",
                token: "",
            };

            setUser(newUser);
            navigate("/");
        }
    }
    return (
        <StyledHeader>
            <p onClick={reload}>TrackIt</p>
            <img src={user.image} alt="user icon" data-identifier="avatar"/>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    background-color: #126ba5;
    color: white;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;

    p {
        font-family: "Playball";
        font-size: 39px;
        line-height: 78.7px;
    }

    img {
        border-radius: 50%;
        width: 51px;
        height: 51px;
    }
`;
