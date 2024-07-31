import React, { useEffect, useState } from 'react'

import useFetch from '../../c-hooks/use-fetch';



const HeroListProducts = () => {
    const [count, setCount] = useState(0)
    const { data, loading, error } = useFetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count*10} `)
    const [disableButton, setDisableButton] = useState(false);
    const [allData, setAllData] = useState([]);

    // useEffect(() => {
    //     if (data && data.length > 0) {
    //         setAllData(prevData => [...prevData, ...data]);
    //     }
    // }, [data]);

    useEffect(() => {
        if (data.length === 40) {
            setDisableButton(true);
        } else {
            setDisableButton(false);
        }
    }, [data]);

    if (loading) return <p className='text-center'>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (

        <div className="">
            <div className="grid grid-cols-4 gap-4 custom-grid ml-32 mr-32  ">

                {data.map((item, index) => {
                    return (
                        <div key={index} className=" flex flex-col justify-between  hover:shadow-xl p-4 bg-white">
                            <img className="w-full h-60 object-cover  hover:object-none   mb-4" src={item.thumbnail} alt={item.title} />
                            <div className="flex flex-col flex-grow justify-between">
                                <p className="mb-2">{item.title}</p>
                                <p className="mb-4">Rs.{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="button text-center">
                <button disabled={disableButton} onClick={() =>setCount(prevCount => prevCount + 1)} className={`text-xl text-rose-600 border-2 w-80 m-10 border-gray-800 text0 ${disableButton?"hover:text-xl ":"hover:text-lg"}`}>LOAD NEXT</button>
            </div>
        </div>
    )
}

export default HeroListProducts
