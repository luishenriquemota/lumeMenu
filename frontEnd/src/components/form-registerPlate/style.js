import styled from "styled-components"


export const FormRegisterPlateStyled = styled.div`
width: 100vw;
height: 100vh;
display: flex;

    form{
    width: 20%;
    height: 60%;
    margin: auto;


    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;


        button{
            background-color: transparent;
            border: 1px solid #000;
            border-radius: 5px;
        };
        button:hover{
            cursor: pointer;
            background-color: #4a4a4aff;
        };
    }

`