import {useState} from 'react'
import CoinGridBox from '../CoinGridBox/CoinGridBox'
import {MainDisplay} from './GridLayoutStyles'


const GridLayoutStyles = ({renderList,updateFavourites, favourites}) => {

    const[isStarred,setIsStarred] = useState(false)

    return (
        <MainDisplay>
            {
                renderList.map((coin)=>{
                    const {id} = coin
                    
                    return(
                        <>
                            <CoinGridBox coin = {coin} updateFavourites={updateFavourites} key={id} favourites = {favourites}/>
                        </>
                    )
                })
            }
        </MainDisplay>
    )
}



export default GridLayoutStyles