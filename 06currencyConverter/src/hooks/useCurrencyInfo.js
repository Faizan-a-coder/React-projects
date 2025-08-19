import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/29286f8bf16394d163d7bd8c/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
           setData(res.conversion_rates || {}); 
      })
        .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
        
    },[currency])
    return data;
}

export default useCurrencyInfo;