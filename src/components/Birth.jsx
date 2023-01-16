import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const Birth = () => {
    
    const [fetch, setFetch] = useState([])
    const [date, setDate] = useState([])
    
    const zero = 'un solo fetch'
    
    const key= '3vIRJmcLMjl1pQ0peu0exjGVox0U3cK8bUgWRrJC'
    const mainUrl= `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}&concept_tags=True`
    
    // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2014-10-01&concept_tags=True
    
    useEffect(  () => {
        
        axios.get(mainUrl)
        .then( res => {
            console.log(res)
            setFetch( [res.data] )
        })      
        .catch( err =>{
            console.log(err)    
        })  
        console.log('times fetch')
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zero]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.get(mainUrl)
        .then( res => {
            console.log(res)
            setFetch( [res.data] )
        })      
        .catch( err =>{
            console.log(err)    
        })  
    }
    console.log(fetch)
    console.log(date)
    
    return (
        <div className='container h-50 m-auto grid grid-cols-2 grid-rows-1 gap-4 py-10 px-10'> 
            <div className='grid-cols-1 gap-10'>
                <h3 className='py-10 px-10 text-2xl font-extrabold dark:text-white'>Busca una fecha importante y descubre como se vio el espacio </h3>
                <form onSubmit={handleSubmit}>
                    <input className='py-10 px-10' type='date' placeholder='date' value={date} onChange={e => setDate(e.target.value)}/>
                    <button className=" py-10 px-10 p-2.5 ml-10 text-sm font-medium text-white bg-blue-700 rounded-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mostrar</button>
                </form>
            </div>
            {
                fetch.map((item,i) =>{
                    return (
                        <div key={i} className='container grid grid-cols-1 grid-rows-2 gap-4' >
                            <img src={item.hdurl} alt={item.title} className='rounded-t-lg h-80 color-black col-span-1 w-full ' loading="lazy"/>
                            <div>
                                <h4 className='mb-2 text-2xl col-span-2 font-bold tracking-tight text-gray-900 dark:text-black text-center'>{item.title}</h4>
                                <p className='grid-cols-1 grid-row-1 '>{item.explanation}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
};

export default Birth;