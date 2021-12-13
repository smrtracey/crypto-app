import React from 'react'
import GridLayout from '../components/GridLayout/GridLayout.js'
import ListLayout from '../components/ListLayout/ListLayout'

const Home = ({renderList,isGrid, filtered,updateFavourites, favourites}) => {
    return (
    <>
        {
            isGrid? <GridLayout renderList = {renderList}  updateFavourites={updateFavourites} favourites={favourites}/>
            :
            <ListLayout renderList = {renderList}  updateFavourites={updateFavourites} favourites={favourites}/>
        }
        
    </>
    )
}

export default Home