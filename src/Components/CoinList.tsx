import { Link } from "react-router-dom";
import { millify } from "millify";

function CoinList() {
  const getSign = (val: string): string => {
    if (val.charAt(0) === "-") {
      return "negative";
    } else {
      return "positive";
    }
  };

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const obj = {
    uuid: "Qwsogvtv82FCd",
    symbol: "BTC",
    name: "Bitcoin",
    color: "#f7931A",
    iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    marketCap: "504575590805",
    price: "26253.093878804764",
    listedAt: 1330214400,
    tier: 1,
    change: "6.41",
    rank: 1,
    sparkline: {
      0: "24847.34260325919",
      1: "24892.280692003038",
      2: "24857.79231672384",
      3: "24828.179313547953",
      4: "24881.761947745585",
      5: "24904.51765249998",
      6: "24866.871385937477",
      7: "24806.228261998363",
      8: "24781.058228032467",
      9: "24935.02043584951",
      10: "24924.690207228166",
      11: "24905.792393165455",
      12: "24959.781103764915",
      13: "25017.255422693976",
      14: "25018.146544519503",
      15: "25097.538244453433",
      16: "25538.57137127336",
      17: "25623.224618717002",
      18: "25734.797404288456",
      19: "25769.724189917426",
      20: "25795.638348691402",
      21: "25983.905268305327",
      22: "26039.440307072175",
      23: "26093.15899418731",
      24: "26136.335136641992",
    },
    lowVolume: false,
    coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    "24hVolume": "36666308334",
    btcPrice: "1",
  };

  return (
    <div className="container">
      <div className="top-4-coins-wrapper">
        <div className="top-4-coins">
          <div className="coin">
            <Link className="coin-link" to={`/coinDetails?uuid=${obj.uuid}`}>
              <img className="coin-img" src={obj.iconUrl} alt="coin-img" />
              <p className="coin-name">{obj.name}</p>
              <p className="coin-price">$ {millify(parseInt(obj.price))}</p>
              <p className={`${parseFloat(obj.change) >= 0 ? "green" : "red"}`}>
                {obj.change} %
              </p>
            </Link>
          </div>
          <div className="coin">
            <Link className="coin-link" to={`/coinDetails?uuid=${obj.uuid}`}>
              <img className="coin-img" src={obj.iconUrl} alt="coin-img" />
              <p className="coin-name">{obj.name}</p>
              <p className="coin-price">$ {millify(parseInt(obj.price))}</p>
              <p className={`${parseFloat(obj.change) >= 0 ? "green" : "red"}`}>
                {obj.change} %
              </p>
            </Link>
          </div>
          <div className="coin">
            <Link className="coin-link" to={`/coinDetails?uuid=${obj.uuid}`}>
              <img className="coin-img" src={obj.iconUrl} alt="coin-img" />
              <p className="coin-name">{obj.name}</p>
              <p className="coin-price">$ {millify(parseInt(obj.price))}</p>
              <p className={`${parseFloat(obj.change) >= 0 ? "green" : "red"}`}>
                {obj.change} %
              </p>
            </Link>
          </div>
          <div className="coin">
            <Link className="coin-link" to={`/coinDetails?uuid=${obj.uuid}`}>
              <img className="coin-img" src={obj.iconUrl} alt="coin-img" />
              <p className="coin-name">{obj.name}</p>
              <p className="coin-price">$ {millify(parseInt(obj.price))}</p>
              <p className={`${parseFloat(obj.change) >= 0 ? "green" : "red"}`}>
                {obj.change} %
              </p>
            </Link>
          </div>
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

          <Link className="detail-row" to={`/coinDetails?uuid=${obj.uuid}`}>
            <span>
              <img src={obj.iconUrl} alt={obj.name} />
              <p>{obj.name}</p>
            </span>
            <p>{"$ " + parseFloat(obj.price).toFixed(2)}</p>
            <p className={`${parseFloat(obj.change) >= 0 ? "green" : "red"}`}>
              {obj.change + " %"}
            </p>
            <p>{numberWithCommas(obj.marketCap)}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoinList;
