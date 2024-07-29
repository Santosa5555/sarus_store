import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)
    async function fetchData(){
        try {
            setLoading(true)
            const response = await axios.get(url)
            setData(response.data.products);
            setLoading(false)

           

        } catch (error) {
            setError(error)

        }
    }


    useEffect(()=>{
        fetchData()

    },[url])
     

    return{data,loading,error}
  
}

export default useFetch
