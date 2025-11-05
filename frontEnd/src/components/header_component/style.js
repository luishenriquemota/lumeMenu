import styled from "styled-components"


export const HeaderStyled = styled.header`
width: 100%;
height: 60px;
background-color: #000000ff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 60px;


img{
  height: 40px;
}
img:hover{
cursor: pointer;
}


nav{
width: 25%;
display: flex;
justify-content: space-between;
color: white;
}


span:hover{
cursor: pointer;
color: #5b6886ff;
}


button{
width: 80px;
height: 30px;
border-radius: 5px;
background-color: transparent;
color: white;
border: 2px solid white;
}
button:hover{
cursor: pointer;
color: #5b6886ff;
border-color: #5b6886ff;
}

`