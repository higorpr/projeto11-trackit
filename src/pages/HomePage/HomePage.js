import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export default function HomePage() {
    return (
        <StyledPage>
            <img src={logo} alt="logo" />
            <StyledForm>
                <input type="text" id="email" placeholder="email" />
                <input type="text" id="password" placeholder="senha" />
            </StyledForm>
            <StyledButton>Entrar</StyledButton>
            <StyledLink to="/registration">Não tem uma conta? Cadastre-se!</StyledLink>
        </StyledPage>
    );
}

const StyledPage = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin: 68px 0 36.6px 0;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
        text-indent: 11px;
        margin-bottom: 6px;

        &::placeholder {
            color: #dbdbdb;
        }
    }
`;

const StyledButton = styled.button`
    color: white;
    font-size: 21px;
    line-height: 26.2px;
    text-align: center;
    background-color: #52b6ff;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
`;

const StyledLink = styled(Link)`
    color: #52B6FF;
    font-size: 14px;
    line-height: 17.5px;
`
