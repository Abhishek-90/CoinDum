import { useEffect, useState } from "react";
import fetchData, { coinListOptions } from "../utils/fetchData";
import Loader from "./Loader";

function CoinDetail({ uuid }: CoinDetailProps) {
  const [coinDetail, setCoinDetail] = useState<any>(undefined);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    async function fetchDataWrapper() {
      const response = await fetchData(
        `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
        coinListOptions
      );
      setCoinDetail(response.coin);
    }
    fetchDataWrapper();
    setTimeout(() => setIsFetching(false), 1000);
  }, []);

  return (
    <div className="container">
      {isFetching && <Loader />}
      {!isFetching && coinDetail && (
        <div className="coin-details">
          <div className="coin-details-basic">
            <img src={coinDetail.iconUrl} alt={coinDetail.name} />
            <div className="basic">
              <span>
                <p>Name:</p>
                <p>{coinDetail.name}</p>
              </span>
              <span>
                <p>Symbol:</p>
                <p>{coinDetail.symbol}</p>
              </span>
              <span>
                <p>Price:</p>
                <p>{"$ " + parseFloat(coinDetail.price).toFixed(2)}</p>
              </span>
              <span>
                <p>24H Change:</p>
                <p>{coinDetail.change + " %"}</p>
              </span>
              <span>
                <p>Market Cap:</p>
                <p>{coinDetail.marketCap}</p>
              </span>
            </div>
          </div>
          <div className="coin-details-description">
            <p>{coinDetail.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface CoinDetailProps {
  uuid: any;
}

export default CoinDetail;
