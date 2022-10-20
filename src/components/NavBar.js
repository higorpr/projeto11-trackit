import styled from "styled-components";

export default function NavBar() {
    return (
        <StyledHeader>
            <p>TrackIt</p>
            <img
                src="https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg"
                alt="user icon"
            />
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
    top:0;
    left: 0;
    box-shadow: 0 4px 4px rgba(0,0,0,0.15);

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
