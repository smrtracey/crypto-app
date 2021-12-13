import styled from 'styled-components'

export const MainDisplay = styled.main`

    width:90%;
    margin: 20px auto;
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align:center;

    h2{
        font-size: 1.2rem;
    }

    @media(min-width: 400px){
        grid-template-columns: repeat(2, 1fr);
   }

    @media(min-width: 600px){
        grid-template-columns: repeat(3, 1fr);
   }

    @media(min-width: 768px){
         grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1000px){
        grid-template-columns: repeat(4, 1fr);

    }

    @media(min-width: 1200px){
        grid-template-columns: repeat(5, 1fr);

    }
`;