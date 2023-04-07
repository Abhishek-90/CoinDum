import CoinDetail from "../Components/CoinDetail";
import { useSearchParams } from "react-router-dom";

function CoinDetails() {
  const [params, setParams] = useSearchParams(window.location.search);

  return (
    <>
      <CoinDetail uuid={params.get("uuid")} />
    </>
  );
}

export default CoinDetails;
