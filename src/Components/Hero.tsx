import { bitcoinImg, etherium } from "../assets/Links";

function Hero() {
  return (
    <div className="container">
      <img className="float-btc" src={bitcoinImg} alt="btc-float" />
      <div className="intro">
        <h2>Trade and Track</h2>
        <p>Crypto Currencies</p>
      </div>
      <img className="float-eth" src={etherium} alt="eth-float" />
    </div>
  );
}

export default Hero;
