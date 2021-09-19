import Head from 'next/head'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout';

export default function Home({filteredCoins}) {

  // we will use 'useState' for our search results

  const [search, setSearch] = useState('');

  const coins_onChange = filteredCoins.filter((coin) => {

    if(search=='')
      return coin;

    else if(coin.name.toLowerCase().includes(search))
      return coin;
  })

  function onChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <Layout>

      <div className="coin_app">
         <SearchBar onChange ={onChange} />
         <CoinList filteredCoins = {coins_onChange}/>
      </div>

    </Layout>
  )
}

//for getting server side props/ fetch API
export const getServerSideProps = async () => {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&sparkline=false');
  const filteredCoins = await res.json();

  return{
    props: {
      filteredCoins
    }
  }
}