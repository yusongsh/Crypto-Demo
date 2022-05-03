import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react' 
import Coin from './Coin.jsx'
import Nav from './nav.jsx'
import spinningCube from './assets/spinnin_cube.png'

function App() {

  const [ coins, setCoins] = useState([])
  const [ search, setSearch] = useState('')

  useEffect (()=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`).then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => console.log(error))
  },[])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )




  return (
    <div className="App">
      <header>
        <Nav/>
      </header>

      <div className='hero-container'>
        <div className='hero-header'>
          <img id="loading" src={spinningCube} alt='spinning cube'></img> 
          <h1>Discover & View crypto </h1>         
        </div>
        <div className='hero-content'>
          <p>Listed below are the stats for NFT collections and individual assets that have listed from the API I used for this project. Purchase NFTs at your own risk. I am not responsible for your personal behavior.</p>
          <a href=''>more about this project → </a>
        </div>
      </div>

    {/* Inifinite scrooling */}
      <div class="marquee">
        <div class="track">
          <p>Bitcoin &nbsp;&nbsp; Ethereum &nbsp;&nbsp; Tether &nbsp;&nbsp; BNB &nbsp;&nbsp; USD Coin &nbsp;&nbsp; XRP &nbsp;&nbsp; Solana &nbsp;&nbsp; Terra &nbsp;&nbsp; Cardano &nbsp;&nbsp; Bitcoin &nbsp;&nbsp; Ethereum &nbsp;&nbsp;Tether &nbsp;&nbsp; BNB &nbsp;&nbsp;USD Coin &nbsp;&nbsp; XRP &nbsp;&nbsp; Filecoin &nbsp;&nbsp; VeChain &nbsp;&nbsp; CUNUS SED LEO &nbsp;&nbsp; Bitcoin &nbsp;&nbsp; Algorand &nbsp;&nbsp;Tether &nbsp;&nbsp; The Sandbox &nbsp;&nbsp;USD Coin &nbsp;&nbsp; Uniswap &nbsp;&nbsp; PancakeSwap &nbsp;&nbsp; THORChain &nbsp;&nbsp; ApeCoin &nbsp;&nbsp; Bitcoin &nbsp;&nbsp; Ethereum &nbsp;&nbsp; Tether &nbsp;&nbsp; BNB &nbsp;&nbsp; USD Coin &nbsp;&nbsp; XRP &nbsp;&nbsp; Solana &nbsp;&nbsp; Terra &nbsp;&nbsp; Cardano &nbsp;&nbsp; Bitcoin &nbsp;&nbsp; Ethereum &nbsp;&nbsp;Tether &nbsp;&nbsp; BNB &nbsp;&nbsp;USD Coin &nbsp;&nbsp; XRP &nbsp;&nbsp; Filecoin &nbsp;&nbsp; VeChain &nbsp;&nbsp; CUNUS SED LEO &nbsp;&nbsp; Bitcoin &nbsp;&nbsp; Algorand &nbsp;&nbsp;Tether &nbsp;&nbsp; The Sandbox &nbsp;&nbsp;USD Coin &nbsp;&nbsp; Uniswap &nbsp;&nbsp; PancakeSwap &nbsp;&nbsp; THORChain &nbsp;&nbsp; ApeCoin &nbsp;&nbsp;
          </p>
        </div>
      </div>

      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="search"
            onChange={handleChange}
          ></input>
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>

  );
}

export default App;
