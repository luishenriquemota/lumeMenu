import {styled} from "styled-components"
import img from '../../assets/intro.jpeg'



export const HomeStyled = styled.div`
width: 100%;
margin: auto;

display: flex;
flex-direction: column;
gap: 40px;


.intro{
    width: 100%;
    height: 50vh;
    background: url(${img}) center / cover no-repeat;

    display: flex;
    align-items: center;
}
.intro > .content{
    width: 50%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 60px;
}
.content > h1{
    font-size: 50px;
}
.content > p{
    font-size: 18px;
    line-height: 30px
}

.buttons{
    display: flex;
    gap: 50px;
}
.buttons > button{
    width: 30%;
    height: 4vh;

    border-radius: 5px;
    
    background-color: transparent;
    font-size: 16px
}

.featured-section{
    width: 80%;
    margin: auto;

    display: flex;
    gap: 30px;
    
    justify-content: center;

}
.featured-section > div{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    
    padding: 15px;
    
    background-color: #c2cccfff;
    
    border-radius: 10px;

    text-align: center;

}
.featured-section > div > h5{
    font-size: 12px;
}
.featured-section > div > p{
    font-size: 10px;
}
.featured-section > div > img{
    width:50%;
}

.container-plateList{
    width: 80%;
    height: 50vh;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 15px;


}


.card-plate{
    width: 19vw;
    height: 52vh;
    background-color: #c2cccfff;

    border-radius: 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.card-plate > img{
   width: 100%;
   height: 60%;
   border-radius: 5% 5% 0 0;
}

.card-plate > .info-plate{
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 5px;
    padding: 5px 15px 5px 15px;
}

`