import styled from "styled-components";

export const GridItem = styled.div` 

box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
border-radius: 10px;

    .upperGridBox{
        display: flex;
        justify-content:space-evenly;
    }

    .symbolP{
        display:none;
    }


    .backing{
        padding-top: 3px;
        border-radius: 10px;
        display: flex;
        overflow: hidden;
    }


    .isUp{
        background-color: var(--clr-positive);
    }

    .isDown{
        background-color: var(--clr-negative);
    }

    .innerContent{
        width: 100%;
        min-height:165px;
        border-radius: 10px;
        background: #ccc;
        position: relative;
        padding: 10px;
    }

    img{
        width: 40%;
        aspect-ratio: 1;
        margin: 20px 0;
    }

    .showHover .hoverInfo{
        transform: translateY(0);
    }

    .last24{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items:center;
        border: 1px solid black;
        border-radius: 10px;
        font-weight: 500;
    }

    .hoverInfo{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: #ccc;
        transform: translateY(120%);
        transition: 300ms;
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
        align-items:center;
        font-weight: 300;
    }

    .hoverInfo p{
        font-weight: 300;
    }


    .hoverTop{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
    }

    .hoverTop img{
        height: 20px;
        width: 20px;
    }

    .past24{
        margin: 5px 0;
    }

    .priceChange{
        margin: 0 auto;
        border-radius: 10px;
        padding: 5px;
    }

    .isUp .hoverInfo .priceChange{
        background: var(--clr-positive);
    }

    .isDown .hoverInfo .priceChange{
        background: var(--clr-negative);
    }

    .hoverBottom{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .hoverBottom i{
        cursor: pointer;        
    }

    .currentPrice{
        font-weight: 500;
    }
    .starred{
        color: yellow;
    }

    button{
        border: 1px solid black;
        border-radius: 10px;
        background: rgba(0,0,0,0);
        padding: 2px 5px;
        cursor: pointer;
        position:relative;
        overflow:hidden;
    }

    button::before{
        content:'';
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background: var(--clr-positive);
        transform: translateX(-100%);
        transition: 300ms;
        z-index:-1;
    }


    button:hover::before{
        transform: translateX(0);
    }
`;