/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './Coins.module.css';

const Coins = ({name, id, symbol, price, volume, image, price_change, market_cap}) => {
    return (
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src = {image} alt={name} className={styles.coin_img} />
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                </div>
                <div className={styles.coin_data}>
                    <div className={styles.coin_price}>${price}</div>
                    <div className={styles.coin_volume}>${volume.toLocaleString()}</div>
                    {/* this above line toLocaleString() just adds commas for larger values */}
                    
                    {price_change < 0 ? 
                    (
                        <p className={styles.coin_percent, styles.red}>{price_change.toFixed(2)}%</p>
                    ) 
                    :
                    (
                        <p className={styles.coin_percent, styles.green}>{price_change.toFixed(2)}%</p>
                    )}

                    <p className={styles.coin_marketcap}>Mkt Cap : ${market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coins
