import styled from "styled-components";

export const MainDisplay = styled.main`

    width: 90%;
    margin: 0 auto;

    ul{
        list-style: none;
    }

    .filterRow{
        justify-content: space-between;
        display: none;

        @media(min-width: 768px){
            display:flex;
        }
    }

    .filterRowItem{
        width: 20%;
        font-weight: 700;
        display: flex;
        justify-content: center;
    }
    .nameColumn{
        justify-content: flex-start;
        width: 15%;
    }

    .starColumn{
        width: 5%;
        margin-right:5%;
    }

    .wideScreenRow{
        display:none;
    }
`;