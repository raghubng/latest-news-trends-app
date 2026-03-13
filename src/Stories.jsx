import React, { useEffect } from 'react'

const Stories = () => {
    let isLoading = true;
    let API = "http://hn.algolia.com/api/v1/search?query=html";

    const fecthApiData = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>
    {
        fecthApiData(API)
    },[]);
    if(isLoading){
        return (
            <>
            <h1>Loading....</h1>
            </>
        )
    }
  return (
    <div>Stories</div>
  )
}

export default Stories