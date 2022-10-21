import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import ProjectContext from "../../constants/Context";
import { loginUrl } from "../../constants/Urls";

export default function HomePage() {
    const { user, setUser } = useContext(ProjectContext);
    const [loading, setLoading] = useState(false);

    function login(event) {
        event.preventDefault();
        const body = {
            email: user.email,
            password: user.password,
        };

        axios
            .post(loginUrl, body)
            .then((res) => {
                console.log(res);
                setUser({ ...user, token: res.data.token });
            })
            .catch((err) => console.log(err));
    }
    return (
        <StyledPage>
            <img src={logo} alt="logo" />
            <StyledForm onSubmit={login}>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                    required
                    disabled={loading === true ? true : false}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="senha"
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                    required
                    disabled={loading === true ? true : false}
                />
                <StyledButton type="submit" onClick={login}>
                    Entrar
                </StyledButton>
            </StyledForm>
            <StyledLink to="/registration">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
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
    color: #52b6ff;
    font-size: 14px;
    line-height: 17.5px;
`;
