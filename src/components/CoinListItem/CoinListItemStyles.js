import styled from 'styled-components'

export const ListItem = styled.li`

    padding: 15px 0;
    width:100%;
    display:flex;
    justify-content: space-between;
    background: var(--clr-listBg);
    cursor: pointer;
    border-bottom: 1px solid var(--clr-text);
    font-size: .7rem;

    &:hover{
        background: var(--clr-listHover);
    }

    @media (min-width: 768px){
        font-size:1rem;
    }

    .listSection{
        display: flex;
        justify-content: center;
        align-items:center;
        width:15%;
        text-align:left;
    }

    .nameColumn{
        width: 15%;
        margin-right:5px;
        justify-content: flex-start;
    }

    .starColumn{
        width: 5%;
    }

    .lowCol,
    .highCol{
        display:none;

        @media(min-width: 768px){
            display:flex;
        }
    }

    img{
        height: 15px;
        width: 15px;
        margin-left:5px;

        @media(min-width: 768px)
        {
            height: 30px;
            width: 30px;
        }
       
        margin: 0 5px;
    }

    .innerPrice{
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
    }

    .starred{
        color: yellow;
    }
   
    .isUp{
        background: var(--clr-positive);
    }

    .isDown{
        background: var(--clr-negative);
    }

`;