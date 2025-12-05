import {styled} from "styled-components"


export const CartPageStyled = styled.div`
width: 60vw;
margin: auto;
margin-top: 40px;



display: flex;



ul{
    display: flex;
    flex-direction: column;
    gap: 40px;
    
}

ul > li{
    width: 80%;
    height: 30%;
    border-bottom: 2px solid black;
    list-style: none;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    
}


ul > li > .info-plate{
    display: flex;
    gap: 20px;
    align-items: center;

    span{
        margin-left: auto;
    }

    img{
        width: 20%;
        height: 80%;
        border-radius: 10%;
    }
}

ul > li > .buttons{
    display: flex;
    justify-content: flex-end;
    gap: 24px;

    .btn-edit{
        width: 22px;
        font-size: 22px;
        font-weight:500;
        margin: 0 10px 0 10px;
        border: none;
        border-radius: 5px;
    }
    .btn-edit:hover{
        cursor: pointer;
        background-color: #4b4b4bff;
    }

    .btn-remove{
        font-size: 14px;
        padding: 8px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
    }
    .btn-remove:hover{
        cursor: pointer;
        background-color: #4b4b4bff;
    }

    span{
        font-size: 22px;
    }
}



`