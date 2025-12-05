import styled from "styled-components"


export const FormRegisterPlateStyled = styled.div`
width: 50vw;
height: 40vh;
display: flex;
background-color: #f0f0f0;
border-radius: 10px;

form{
    width: 80%;
    height: 80%;
    margin: auto;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;


        button{
            width:50%;
            height: 24px;
            background-color: transparent;
            border: 1px solid #000;
            border-radius: 5px;
        };
        button:hover{
            cursor: pointer;
            background-color: #4a4a4aff;
        };
}

form > div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

`