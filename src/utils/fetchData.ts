export const coinListOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_COINRANKING_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const json = await response.json();
  return json.data;
};

export default fetchData;
