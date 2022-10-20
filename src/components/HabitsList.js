import styled from "styled-components";
import Day from "./Day";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function HabitsList() {
    const habitsTest = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5],
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6],
        },
    ];

    // useEffect(() => {
    //     const config = {
    //         headers : {
    //             'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY'
    //         }
    //     }
    //     axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err))

    //     },[]);

    const weekdays = [0, 1, 2, 3, 4, 5, 6];

    return (
        <StyledList>
            {habitsTest.map((habit) => (
                <li key={habit.id}>
                    <p>{habit.name}</p>
                    <IconContext.Provider value={{ size: "15px" }}>
                        <ReactIcon>
                            <BsTrash />
                        </ReactIcon>
                    </IconContext.Provider>
                    <ButtonContainer>
                        {weekdays.map((day, idx) => (
                            <Day key={idx} day={day} targetDays={habit.days} />
                        ))}
                    </ButtonContainer>
                </li>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        width: 340px;
        height: 91px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 5px;
        position: relative;
        padding: 13px 0 0 14px;
        box-sizing: border-box;

        p {
            margin-bottom: 8px;
            font-size: 20px;
            line-height: 25px;
            color: #666666;
        }
    }
`;

const DayButton = styled.button`
    margin-left: 4px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    color: #dbdbdb;
    background-color: white;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: left;
`;

const ReactIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;
