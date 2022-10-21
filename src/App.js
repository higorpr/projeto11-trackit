import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ProjectContext from "./constants/Context";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        image: "",
        token: "",
    });
    

    return (
        <ProjectContext.Provider
            value={{
                loggedIn,
                setLoggedIn,
                user,
                setUser
            }}
        >
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="/habits" element={<HabitsPage />} />
                    <Route path="/today" element={<TodayPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </ProjectContext.Provider>
    );
}

export default App;
