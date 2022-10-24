import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import ProjectContext from "../../constants/Context";
import { signUpUrl } from "../../constants/Urls";
import { ThreeDots } from "react-loader-spinner";

export default function RegistrationPage() {
    const { user, setUser } = useContext(ProjectContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function signUp(event) {
        event.preventDefault();
        setLoading(true);

        const body = {
            email: user.email,
            name: user.name,
            image: user.image,
            password: user.password,
        };

        axios
            .post(signUpUrl, body)
            .then((res) => {
                setLoading(false);
                setUser({ ...user, email: "" });
                setUser({ ...user, password: "" });
                navigate("/");
            })
            .catch((err) => {
                alert(err.response.data.message)
                setLoading(false);
            });
    }

    return (
        <StyledPage>
            <img src={logo} alt="logo" />
            <StyledForm onSubmit={signUp}>
                <input
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
                <input
                    type="text"
                    id="name"
                    placeholder="nome"
                    value={user.name}
                    onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                    }}
                    required
                    disabled={loading === true ? true : false}
                />
                <input
                    type="url"
                    id="image"
                    placeholder="foto"
                    value={user.image}
                    onChange={(e) => {
                        setUser({ ...user, image: e.target.value });
                    }}
                    required
                    disabled={loading === true ? true : false}
                />
                <StyledButton
                    type="submit"
                    disabled={loading === true ? true : false}
                >
                    {loading === true ? (
                        <ThreeDots width="50" height="13" color="#ffffff" />
                    ) : (
                        <p>Cadastrar</p>
                    )}
                </StyledButton>
            </StyledForm>
            <StyledLink to="/">Já tem uma conta? Faça o login!</StyledLink>
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
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.7;
    }
`;

const StyledLink = styled(Link)`
    color: #52b6ff;
    font-size: 14px;
    line-height: 17.5px;
`;
