import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData, { coinListOptions } from "../utils/fetchData";

const RESULTS_PER_PAGE = 30;

function CoinList() {
  const [coinData, setCoinData] = useState([]);
  const [top4CoinData, setTop4CoinData] = useState([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const runFetchData = async () => {
      const response = await fetchData(
        `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${RESULTS_PER_PAGE}&offset=${
          (page - 1) * RESULTS_PER_PAGE
        }`,
        coinListOptions
      );
      setCoinData(response.coins);
      setTop4CoinData(response.coins.splice(0, 4));
    };
    runFetchData();
  }, [page]);

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="container">
      <div className="top-4-coins-wrapper">
        <div className="top-4-coins">
          {top4CoinData.length > 0 &&
            top4CoinData.map((coin: any) => (
              <div className="coin">
                <Link
                  className="coin-link"
                  to={`/coinDetails?uuid=${coin.uuid}`}
                >
                  <img className="coin-img" src={coin.iconUrl} alt="coin-img" />
                  <p className="coin-name">{coin.name}</p>
                  <p className="coin-price">
                    $ {parseFloat(coin.price).toFixed(2)}
                  </p>
                  <p
                    className={`${
                      parseFloat(coin.change) >= 0 ? "green" : "red"
                    }`}
                  >
                    {coin.change} %
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* All Coin Details */}
      <div className="coin-detail-wrapper">
        <div className="coin-detail">
          <div className="header">
            <p>Coin</p>
            <p>Price</p>
            <p>24H Change</p>
            <p>Market Cap</p>
          </div>

          {coinData.length > 0 &&
            coinData.map((coin: any) => (
              <Link
                className="detail-row"
                to={`/coinDetails?uuid=${coin.uuid}`}
              >
                <span>
                  <img src={coin.iconUrl} alt={coin.name} />
                  <p>{coin.symbol}</p>
                </span>
                <p>{"$ " + parseFloat(coin.price).toFixed(2)}</p>
                <p
                  className={`${
                    parseFloat(coin.change) >= 0 ? "green" : "red"
                  }`}
                >
                  {coin.change + " %"}
                </p>
                <p>{numberWithCommas(coin.marketCap)}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CoinList;
