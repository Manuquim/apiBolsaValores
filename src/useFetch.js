import { useState,useEffect } from "react";

export const UseFetch = () =>{
    const YOUR_ACCESS_KEY='68aba083c941c5e57de398053879a949';

    const url2="http://api.marketstack.com/v1/eod?access_key="+YOUR_ACCESS_KEY+'&symbols=AAPL&date_from=2022-12-01&date_to=2022-12-31';

    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState(null);

    var myHeaders = new Headers();
    

    var myInit = { method: 'GET',
               headers: myHeaders,
               'Content-Type': 'application/json',
               mode: 'cors',
               cache: 'default'};

      
    useEffect(()=>
    { 
        setLoading(true);
        fetch(url2, myInit)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(()=>setLoading(false))
    },[]);
    console.log("hola",data);
    return { data ,loading,error };
}