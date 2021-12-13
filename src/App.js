import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'

function App() {

    const[coinList, setCoinList] = useState([])
    
    const fetchCoinData = async() =>{
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false`)
      const data = await res.json()
      setCoinList(data)
      setRenderList(data)
    }

     //Users favourites
     const[favourites, setFavourites] = useState([])

    // const fetchFavourites = async() =>{
    //   const res = await fetch(`http://localhost:5000/favourites`)
    //   const data = await res.json()
    //   setFavourites(data.favourites)   
    // }

    useEffect(()=>{
      fetchCoinData()

      const listFromStorageString = localStorage.getItem('favourites')
      if(listFromStorageString){
        const listFromStorageArray = JSON.parse(listFromStorageString)
        setFavourites(listFromStorageArray)
      }else{
        setFavourites([])
      }
    },[])

    //Save favourites to local storage
    useEffect(()=>{
      const favouritesString = JSON.stringify(favourites)
      localStorage.setItem('favourites', favouritesString)
    },[favourites])

   

    // Display mode --Grid or List
    const [isGrid,setIsGrid] = useState(true)

    //The list of results  from search function
    const [filtered, setFiltered] = useState([])

    // The list to render
    const [renderList,setRenderList] = useState([])

    const searchByName =(term) =>{
      setFiltered(
        coinList.filter((coin)=>{
          return(
            coin.name.toLowerCase().includes(term.toLowerCase())
          )
        })
      )

      filtered.length > 0? setRenderList(filtered)
      :
      setRenderList(coinList)

      if(term ==='') setRenderList(coinList)
    }

    const sortByName =()=>{
      const toSort = [...renderList]
      const sorted = toSort.sort((a,b) => (a.name > b.name) ? 1: -1)
      setRenderList(sorted)
    }

    const sortPriceUp =()=>{
      const toSort = [...renderList]
      const sorted = toSort.sort((a,b) => (a.price_change_24h > b.price_change_24h) ? 1: -1)
      setRenderList(sorted)
    }

    const sortPriceDown =()=>{
      const toSort = [...renderList]
      const sorted = toSort.sort((a,b) => (a.price_change_24h < b.price_change_24h) ? 1: -1)
      setRenderList(sorted)
    }

    const toggleDisplay =() =>{
      setIsGrid(!isGrid)
    }

    //users starred coins
    const updateFavourites = (selectedCoin) =>{
      
      const newFavourites =[...favourites];
      //Remove selected coin
      let doesContain = false
      for(let i = 0;i<newFavourites.length; i++)
      {
        if(newFavourites[i]===selectedCoin){
          doesContain = true;
          newFavourites.splice(i,1)
          setFavourites(newFavourites)
        }
      }

      if(!doesContain){
      
      // add the new coin to favourites
        newFavourites.push(selectedCoin);
        setFavourites(newFavourites)
      }
    }

    // show only the users starred coins.
    const renderFavourites =()=>{
      setRenderList(favourites)
    }

    const renderAll =()=>{
      setRenderList(coinList)
    }

  return (
    <Router>
      <Header
        toggleDisplay ={toggleDisplay}
        searchByName  ={searchByName}
        sortByName = {sortByName}
        sortPriceDown = {sortPriceDown}
        sortPriceUp = {sortPriceUp}
        renderFavourites ={renderFavourites}
        renderAll ={renderAll}
      />

      <Route>
        <Home renderList = {renderList} isGrid = {isGrid} updateFavourites={updateFavourites} favourites = {favourites}/>
      </Route>
       
    </Router>
   
  );
}

export default App;
