import React, {useState, useEffect} from 'react'

import{ListItem} from './CoinListItemStyles'

const CoinListItem = ({ updateFavourites,coin,favourites}) => {

    const{id,name,image,symbol,current_price,price_change_24h, high_24h, low_24h} = coin
    // Display to 4 decimal places.
    const priceRounded = price_change_24h.toFixed(4)

    const [isStarred, setIsStarred] = useState()
    const toggleStarred = (star) =>{
        setIsStarred(!isStarred)
        updateFavourites(coin)
    }

    useEffect(()=>{
        for(let i =0;i<favourites.length;i++){
            if(favourites[i] === coin){
                setIsStarred(true)
            }
        }
   },[])

    return (
        <>
            <ListItem>

                    <section className ='listSection nameColumn'><img src ={image}/>{name}</section>
                    <section className ='listSection'>{current_price}</section>
                    <section className ='listSection lowCol'>{low_24h}</section>
                    <section className ='listSection highCol'>{high_24h}</section>
                    <section className = {`listSection`}>

                        <span className = {`innerPrice ${price_change_24h>0 ? "isUp":"isDown"}`}>{priceRounded}</span>


                    </section>

                    <section className ='listSection starColumn'>
                        <i className = {`fas fa-star  ${isStarred? 'starred': ''}`} onClick ={(e)=>toggleStarred(coin)} />
                    </section>
            </ListItem>
        
        </>
       
    )
}

export default CoinListItem