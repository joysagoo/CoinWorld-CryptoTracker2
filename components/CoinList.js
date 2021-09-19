/*now whatever data the API will fetch for us, we will
only be using few parts of the jSON returned from filteredCoins */

import Coins from './Coins';

export default function CoinList({filteredCoins}) {

    return (
        <div>
        {filteredCoins.map(coin => {
            return (
                <Coins
                key={coin.id}
                id={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                market_cap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                price_change={coin.price_change_percentage_24h} 
                />
            );
        })}
        </div>
    );
}