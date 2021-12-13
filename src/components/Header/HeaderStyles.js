import styled from 'styled-components'

export const MyHeader = styled.header`

    h1{
        font-size: 3rem;
        width:100%;
        text-align:center;

        @media (min-width:768px){
            margin-left:5%;
            text-align:left;
        }
    }

    .lowerHeader{
        display:flex;
        justify-content: space-between;
        margin: 20px 0;
    }

    .filterItems{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction:column;
        align-items:center;

        @media (min-width:768px){
            display: flex;
            justify-content:space-between;
            flex-direction:row;
            align-items:center;
        }       
    }

    .shortFilters{
        width:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        margin: 20px 0;
    }

    .searchWrapper{
        display:flex;
        border:1px solid var(--clr-text);
        width: 80%;
        margin:0 auto;//****** MEDIA!
        padding: 5px  0;

        @media(min-width: 768px){
            width: 20%;
            margin: 0;
        }
        i{
            margin-left: 5px;
        }

        input{
            border: 0;
            margin-left: 5px;
            background: rgba(0,0,0,0);
        }
        

        input:hover,
        input:active,
        input:focus{
            outline:0;
        }
    }


    .select{
        cursor:pointer;
    }

    .select:hover{
        text-decoration: underline;
        font-weight: 700;
    }


    .sort{
        cursor: pointer;
        border: 1px solid var(--clr-text)
        width: 150px;
        padding: 5px 0;
        display:flex;
        justify-content: space-between;
        align-items:center;
        position:relative;

        p{
            margin-left: 5px;
        }

        i{
            margin-left: 10px;
        }

    }

    .sortMenu{
        position: absolute;
        top:110%;
        width:300%;
        border: 1px solid var(--clr-text);
        border-radius: 10px;
        background: var(--clr-mainBg);
        z-index:999;
        overflow:hidden;
        display:none;


        ul{
            list-style:none;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
            width: 100%;
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100px; 
        }

        li{
            margin-left: 5px;
        }

        li:hover{
            font-weight: bold;
        }

    }
        

        .toggleWrapper{
            display:flex;

            p{
                margin: 0 5px;
            }
        }

        .switch{
            width: 40px;
            height: 20px;
            border: 1px solid var(--clr-text);
            border-radius: 50vw;
            cursor: pointer;
        }

        .innerSwitch{
            height: 100%;
            width: 20px;
            background: #ccc;
            border-radius: 100%;
            transform: translateX(0);
            transition: 300ms;
        }

        .moveSwitch{
            transform: translateX(100%);
        }

    

    .showSortMenu{
        display:block;
    }
`;