import styled from "styled-components"


export const FormStyled = styled.form`
width: 30vw;
height: 80vh;
background-color: #404249ff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2vh;
opacity: 0.8;

// margin: auto auto auto auto;
border-radius: 10px;


input{
  width: 60%;
  height: 6vh;
  border-radius: 5px;
  border: none;
  padding: 0 2px;
}

button{
  width: 50%;
  height: 6vh;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  }

button:hover{
    background-color: #5b6886ff;
`