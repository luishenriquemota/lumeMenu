import {styled} from 'styled-components';

export const LoginRegisterPageStyled = styled.div`
    width:100vw;
    height:100vh;
    position:absolute;
    bottom:0;
    left:0;
    z-index:10;
    background-color: rgba(0, 0, 0, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;


.container{
    width: 50vw;
    height: 50vh;
    display: flex;
    background-color: #ffffff;
}


.content-right, .content-left{
    width: 50%;
    height: 100%;
    background-color: #a7a7a7ff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.form-login, .form-register{
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}


.btn-login:hover{
    cursor: pointer;
    color: #1a4473ff
}


span{
    font-size: 14px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

form > button{
    width: 80%;
    height: 25px;

    border: none;
    border-radius: 5px;
}

button:hover{
    cursor: pointer;
}


.btn-subscribe{
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 5px;
    width: 120px;
    height: 20px;
}
.btn-subscribe:hover{
    cursor: pointer;
    background-color: #4a4a4aff;
}

`