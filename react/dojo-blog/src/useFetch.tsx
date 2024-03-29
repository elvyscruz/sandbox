import { useEffect, useState } from "react";

const useFetch = (url: string) => {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

 useEffect(() => {
  fetch(url)
  .then((res)=> {
    if(!res.ok) {
      throw Error('could not fetch data for resource '+ url)
    }
    return res.json();
  })
  .then((data)=> {
    setData(data); 
    setIsLoading(false);
    setError(null)
  })
  .catch(err => {
    setIsLoading(false);
    setError(err.message)
  })
 },[url])

return {data, isLoading, error} 
 
}

export default useFetch