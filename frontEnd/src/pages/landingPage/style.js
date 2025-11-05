import {styled} from 'styled-components'
import img from '../../assets/plano_fundo.png'


export const LandingPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
    background: 
    url(${img}) center / cover no-repeat;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 60px;
    }

    .content{
      width: 50%;
      height: 40vh;
      display: flex;
      flex-direction:column;
      justify-content: space-around;
    }

    .content > h1 {
      font-size: 50px;
    }

    .content > p {
      font-size: 25px;
    }

    .buttons {
        display: flex;
        gap: 50px;
    }

    .content > div > button {
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background-color: transparent;
        color: black;
        border: 2px solid black;
        font-weight: bold;
        font-size: 14px;
    }   
    .content > div > button:hover {
        cursor: pointer;
        color: #5b6886ff;
        border-color: #5b6886ff;
    }
`