import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function DateStar() {
    
    
    const [fetch, setFetch] = useState([])
    const [one, setOne] = useState(1)
    const [date, setDate] = useState([])
    
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
            
    }, [one]);
    
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
        // <div className='inline-flex container mx-auto px-4 h-48 max-h-full  px-1 py-2 '> 
        <div className=' items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  px-1 py-2 display: inline flex mx:auto'> 
        
        
            <div className='mx-auto px-2'>
                <form onSubmit={handleSubmit}>
                    <input type='date' placeholder='date' value={date} onChange={e => setDate(e.target.value)}/>
                    <button>Mostrar</button>
                </form>
            </div>
            {
                fetch.map((item,i) =>{
                    return (
                        <div key={i} >
                            <img src={item.hdurl} alt={item.title} className='rounded-t-lg' loading="lazy"/>
                            <div>
                                <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>{item.title}</h3>
                                <p>{item.explanation}</p>
                            </div>
                            {/* <p>{item.date}</p>
                            <p>{item.copyright}</p> */}
                        </div>
                    )
                })
            }
            <NavLink to={'/'}>Home</NavLink>
        </div>
    )
}

export default DateStar