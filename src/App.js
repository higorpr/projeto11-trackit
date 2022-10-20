import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserLoggedContext } from "./constants/Contexts";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserLoggedContext.Provider value={loggedIn}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        }
                    />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="/habits" element={<HabitsPage />} />
                    <Route path="/today" element={<TodayPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </UserLoggedContext.Provider>
        </BrowserRouter>
    );
}

export default App;

// PPP

// Progresso: 
// - Layouts prontos
// - Lógica para modificar o layout dos botões da rota de hábitos pronta

// Problema: 
// - Até ontem: uso do Context para passar várias variáveis de uma vez só dentro de um só contexto
// - Provável próximo problema: planejamento de tempo pois terei que viajar no sábado.

// Planejamento:
// - Terminar as animações (gif enquanto se carrega a página, etc), terminando páginas de login e cadastro (quinta)
// - Lógica da página de hábitos (sexta)
// - Lógica da página de hoje (sábado)
// - Adicionar tags de correção automática e tentar adicionar lógica para página de histórico (domingo)
// - Adicionar a persistência de login e possivelmente o clique no dia (segunda)