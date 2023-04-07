import { useEffect, useState } from "react";
import fetchData, { coinListOptions } from "../utils/fetchData";

function CoinDetail({ uuid }: CoinDetailProps) {
  const [coinDetail, setCoinDetail] = useState<any>({
    uuid: "Qwsogvtv82FCd",
    symbol: "BTC",
    name: "Bitcoin",
    description:
      'Bitcoin is a digital currency with a finite supply, allowing users to send/receive money without a central bank/government, often nicknamed "Digital Gold".',
    color: "#f7931A",
    iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    websiteUrl: "https://bitcoin.org",
    links: [
      {
        name: "bitcoin.org",
        type: "website",
        url: "https://bitcoin.org",
      },
      {
        name: "bitcoinmagazine.com",
        url: "https://bitcoinmagazine.com/",
        type: "website",
      },
      {
        name: "bitcointalk.org",
        url: "https://bitcointalk.org/",
        type: "bitcointalk",
      },
      {
        name: "blockchain.com",
        url: "https://www.blockchain.com/explorer",
        type: "explorer",
      },
      {
        name: "bitcoin/bitcoin",
        url: "https://github.com/bitcoin/bitcoin",
        type: "github",
      },
      {
        name: "r/bitcoin",
        url: "https://www.reddit.com/r/bitcoin/",
        type: "reddit",
      },
      {
        name: "Bitcoin_Magazine",
        url: "https://t.me/Bitcoin_Magazine",
        type: "telegram",
      },
      {
        name: "bitcoin",
        url: "https://t.me/bitcoin",
        type: "telegram",
      },
      {
        name: "Bitcoin Whitepaper",
        url: "https://bitcoin.org/bitcoin.pdf",
        type: "whitepaper",
      },
    ],
    supply: {
      confirmed: true,
      supplyAt: 1669711321,
      max: "21000000",
      total: "19219662",
      circulating: "19219662",
    },
    numberOfMarkets: 4472,
    numberOfExchanges: 135,
    "24hVolume": "12141541549",
    marketCap: "539213518813",
    fullyDilutedMarketCap: "589161448057",
    price: "28055.307050310046",
    btcPrice: "1",
    priceAt: 1680848760,
    change: "-0.01",
    rank: 1,
    sparkline: [
      "28072.996987215996",
      "28061.589297631526",
      "27972.292621439945",
      "27997.827915473037",
      "27920.84622490567",
      "27935.29327839086",
      "27959.14065731069",
      "27938.0473126883",
      "27949.365937370174",
      "28071.117296406577",
      "28136.42843508261",
      "28111.28552227132",
      "28099.5805875868",
      "28075.066604478005",
      "28124.925649410805",
      "28097.70496374602",
      "28058.28032360591",
      "28093.722898963108",
      "28117.767914028198",
      "28149.794157994875",
      "28148.693410384232",
      "28144.699919579216",
      "28129.930375175267",
      "28082.33021338636",
    ],
    allTimeHigh: {
      price: "68763.41083248306",
      timestamp: 1636502400,
    },
    coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    tier: 1,
    lowVolume: false,
    listedAt: 1330214400,
    hasContent: true,
    notices: null,
    tags: ["layer-1", "proof-of-work"],
  });

  // useEffect(() => {
  //   async function fetchDataWrapper() {
  //     const response = await fetchData(
  //       `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
  //       coinListOptions
  //     );
  //     setCoinDetail(response.coin);
  //   }
  //   fetchDataWrapper();
  // }, []);

  // useEffect(() => {
  //   console.log(coinDetail);
  // }, [coinDetail]);

  return (
    <div className="container">
      {coinDetail && (
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
