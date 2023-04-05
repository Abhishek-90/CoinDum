import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData, { coinListOptions } from "../utils/fetchData";

const RESULTS_PER_PAGE = 30;

function CoinList() {
  const [coinData, setCoinData] = useState([]);
  const [top4CoinData, setTop4CoinData] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    console.log(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${RESULTS_PER_PAGE}&offset=${
        (page - 1) * RESULTS_PER_PAGE
      }`
    );
    const runFetchData = async () => {
      const response = await fetchData(
        `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${RESULTS_PER_PAGE}&offset=${
          (page - 1) * RESULTS_PER_PAGE
        }`,
        coinListOptions
      );
      setCoinData(response.coins);
    };
    runFetchData();
  }, [page]);

  useEffect(() => {
    let pages: number[] = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= Math.min(6, totalPages); i++) {
        pages.push(i);
      }
    } else if (
      (page >= 1 && page <= 3) ||
      (page >= totalPages - 2 && page <= totalPages)
    ) {
      for (let i = 1; i <= 3; i = i + 1) pages.push(i);

      pages.push(0);

      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages = pages.concat([1, 0, page - 1, page, page + 1, 0, totalPages]);
    }
    setPagination(pages);
  }, [totalPages, page]);

  useEffect(() => {
    const runFetchData = async () => {
      const response = await fetchData(
        `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=4&offset=0`,
        coinListOptions
      );
      setTop4CoinData(response.coins);
    };
    runFetchData();
  }, []);

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="container">
      <div className="top-4-coins-wrapper">
        <div className="top-4-coins">
          {top4CoinData.length > 0 &&
            top4CoinData.map((coin: any, index: number) => (
              <div className="coin">
                <Link
                  className="coin-link"
                  to={`/coinDetails?uuid=${coin.uuid}`}
                  key={index}
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
                key={coin.uuid}
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

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-btn pagination-btn-prev"
          onClick={() => setPage(page - 1)}
          disabled={page < 2}
        >
          Prev
        </button>
        {pagination.length > 0 &&
          pagination.map((page) =>
            page !== 0 ? (
              <button
                className="pagination-btn pagination-btn-page"
                onClick={() => setPage(page)}
              >
                <span>{page}</span>
              </button>
            ) : (
              <span className="pagination-dots">{"..."}</span>
            )
          )}
        <button className="pagination-btn pagination-mobile-view">
          {page}
        </button>
        <button
          className="pagination-btn pagination-btn-next"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinList;
