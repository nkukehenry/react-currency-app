import axios from "axios";
import { useEffect } from "react";

function RateBoard(){

    function fetchCurrencies(){

        axios.get("https://api.forexrateapi.com/v1/symbols?api_key=079242e58096f227fbf80cb9971eed4c")
        .then((response)=>{
            console.log('Response',response)
        })
        .catch( (error)=>{
            console.log('Error',response)
        });
        
    }

    useEffect(()=>{

        

    },[])

    return <>
    <h3>Rate Board</h3>
    </>

}

export default RateBoard;