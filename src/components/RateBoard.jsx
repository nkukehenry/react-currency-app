import axios from "axios";
import { useEffect,useState } from "react";
import { API_KEY, QUOTE_CURRENCY, BASE_URL,BASE_CURRENCIES } from "../constants";

function RateBoard(){

    const [currencyRates, setCurrencyRates] = useState([]);
    const [ratesLoaded, setRatesLoaded]     = useState(false);

    function fetchCurrencies(){

        axios.get(`${BASE_URL}symbols?api_key=${API_KEY}`)
        .then((response)=>{
            console.log(' Response',response)
            
            if(response.data.success){
                console.log('Currencies Response',response.data)
            }
            else{
                console.log('Response Error',response.error)
            }

        })
        .catch( (error)=>{
            console.log('Error',response)
        });

    }

    function fetchRates(baseCurrency,quoteCurrency){

        axios.get(`${BASE_URL}latest?api_key=${API_KEY}&base=${baseCurrency}&currencies=${quoteCurrency}`)
        .then((response)=>{
            
            if(response.data.success){
                console.log("Rates Response",response)
                //... is Spread operator, copies data from the target variables
                setCurrencyRates([...currencyRates,response.data])
            }
            else{
                console.log("Rates Error Resp",response.data.error)
            }
        })
        .catch((error)=>{
            console.log("Rates Error",error)
        })
    }

    useEffect(()=>{
        //fetchCurrencies();
        BASE_CURRENCIES.map((currencyCode,currentIndex)=>{
            
            fetchRates(currencyCode,QUOTE_CURRENCY);
            
            if(currentIndex == (BASE_CURRENCIES.length-1)){
                setRatesLoaded(true)
            }

        })

        console.log("All Rates",currencyRates)

    },[])

    return <>
    <h3>Rate Board</h3>
    </>

}

export default RateBoard;