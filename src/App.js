import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ProjectContext from "./constants/Context";
import { habitsTodayUrl } from "./constants/Urls";
import axios from "axios";

function App() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        image: "",
        token: "",
    });
    const [progress, setProgress] = useState(0);
    const [todayHabits, setTodayHabits] = useState([]);

    function getTodayHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        axios
            .get(habitsTodayUrl, config)
            .then((res) => {
                console.log(res.data);
                const tempHabits = res.data;
                setTodayHabits(tempHabits);

                const doneHabits = tempHabits.filter((h) => h.done === true);
                setProgress(doneHabits.length / tempHabits.length);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    return (
        <ProjectContext.Provider
            value={{
                user,
                setUser,
                progress,
                setProgress,
                todayHabits,
                setTodayHabits,
                getTodayHabits,
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
