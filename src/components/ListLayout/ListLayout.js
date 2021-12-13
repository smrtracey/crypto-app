import React, {useState} from 'react'

import CoinListItem from '../CoinListItem/CoinListItem.js'
import { MainDisplay } from '../ListLayout/ListLayoutStyles'

const ListLayout = ({renderList,updateFavourites, favourites}) => {

    const[isStarred,setIsStarred] = useState(false)
    return (
        <MainDisplay>
            
            <ul>
                    <li className = 'filterRow'>
                        <div className = 'filterRowItem nameColumn'> Name</div>
                        <div className = 'filterRowItem '>Current Price</div>
                        <div className = 'filterRowItem '>Low 24h</div>
                        <div className = 'filterRowItem '>high 24h</div>
                        <div className = 'filterRowItem '>Price Change</div>
                        <div className = 'filterRowItem starColumn'>Starred</div>

                    </li>

                    {
                        renderList.map((coin)=>{
                            const {id,name,image,symbol} = coin
                            return(
                                <>
                                <CoinListItem coin = {coin} updateFavourites={updateFavourites} key={id} favourites = {favourites}/>
                                </>
                            )
                        })
                    }   
            </ul>
        </MainDisplay>
    )
}

export default ListLayout