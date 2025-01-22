import axios from "axios";
import { useEffect } from "react";
import { API_KEY, BASE_URL } from "../constants";

function RateBoard(){

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

    useEffect(()=>{
        fetchCurrencies();
    },[])

    return <>
    <h3>Rate Board</h3>
    </>

}

export default RateBoard;