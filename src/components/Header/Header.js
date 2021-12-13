import React, {useState} from 'react'

import {MyHeader} from './HeaderStyles.js'


const Header = ({toggleDisplay, searchByName, sortByName, sortPriceDown,sortPriceUp, renderFavourites, renderAll}) => {

    const[sortMenuOpen, setSortMenuOpen] = useState(false)

    const [toggle, setToggle] = useState(false)

    const toggleSwap =() =>{
        setToggle(!toggle)
        toggleDisplay()
    }

    const toggleSortMenu = () =>{
        setSortMenuOpen(!sortMenuOpen)
    }

    return (
        <MyHeader>

            <h1>The Crypt</h1>
            
            <div className = 'lowerHeader'>

                <div className = 'filterItems'>

                    <div className = 'searchWrapper'>
                        <i className =  'fas fa-search'></i>
                        
                        <input 
                        type = 'text'
                        placeholder='Search by name'
                        onChange ={(e) => searchByName(e.target.value)}
                        />

                    </div>

                    <div className = 'shortFilters'>
                    <div className = 'sort' onClick ={toggleSortMenu}>
                        <p>Sort By</p><i className ='fas fa-angle-down'></i>

                        <div className = {`sortMenu ${sortMenuOpen && "showSortMenu"}`}>

                            <ul>
                                <li onClick= {sortByName}>Name</li>
                                <li onClick= {sortPriceDown}>Price Change(High to Low)</li>
                                <li onClick={sortPriceUp}>Price Change(Low to High</li>
                            </ul>
                        </div>
                    </div>

                    <div className = 'select myCoins' onClick ={renderFavourites}> My Favourites</div>
                    <div className = 'select' onClick ={renderAll}> See All</div>

                    </div>
                    <div className = 'toggleWrapper'>
                        <p>Grid</p>
                        <div className = 'switch' onClick = {toggleSwap}>
                            <div className={`innerSwitch ${toggle ? "moveSwitch": ''}`}/>
                        </div>
                        <p>List</p>
                    </div>

                </div>

            </div>
        </MyHeader>
    )
}

export default Header





