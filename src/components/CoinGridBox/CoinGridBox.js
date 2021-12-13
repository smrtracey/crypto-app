import React, {useState, useEffect} from 'react'

import {GridItem} from './CoinGridBoxStyles'

const CoinGridBox = ({coin, updateFavourites,favourites}) => {
    
    const [isHovering, setIsHovering] = useState(false)

    const toggleHover = ()=>{
        setIsHovering(!isHovering)
    }

    const [isStarred, setIsStarred] = useState()

    const{id,name,image,symbol,current_price,price_change_24h, high_24h, low_24h} = coin

    const bg = price_change_24h > 0? 'isUp' :'isDown'

    // Display to 4 decimal places.
    const priceRounded = price_change_24h.toFixed(4)

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
        <GridItem key ={id}>

            <div className ={`backing ${bg}`}>


                <div className = {`innerContent ${isHovering && 'showHover'}`} onMouseEnter ={toggleHover} onMouseLeave = {toggleHover}>
                    <div className = 'upperGridBox'>
                        <i className = {`mobileStar fas fa-star  ${isStarred? 'starred': ''}`} onClick ={(e)=>toggleStarred(coin)} />
                        <h2> {name}</h2>

                    </div>
                    
                    <img src = {image} alt ='coin logo'/>
                    <p className = 'symbolP'>{symbol}</p>
                    <p className = 'priceP'>Price: {current_price}</p>



                    <div className = {`hoverInfo ${bg}`}>

                        <div className = 'hoverTop'>

                            <img src = {image} alt = 'coin logo'/>
                            <h2> {name}</h2>
                            
                        </div>

                        <p><span className='subheading currentPrice'>Current Price: </span>{current_price}</p>
                        <div className='last24'>
                            <h2> Last 24 Hours</h2>

                            <p className = 'past24'><span className = 'subheading'>Price Change: </span><span  className = 'priceChange'>{priceRounded}</span></p>
                            <p><span className ='subheading'>Low: </span>{low_24h}</p>
                            <p><span className ='subheading'>High: </span>{high_24h}</p>
                        </div>

                        <div className='hoverBottom'>
                            <button>See More</button>
                            <i className = {`fas fa-star  ${isStarred? 'starred': ''}`} onClick ={(e)=>toggleStarred(coin)} />
                            
                        </div>
                    </div>
                </div>

            </div>


        </GridItem>
       
    )
}

export default CoinGridBox