// import { useDispatch,useSelector } from 'react-redux'
// import { fetchData } from '../features/data/dataSlice'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from './Carousel';

function Main() {
   
    const [fetchInfo, setFetchInfo] = useState([])
    const [uno, setUno] = useState(1)
    const key= '3vIRJmcLMjl1pQ0peu0exjGVox0U3cK8bUgWRrJC'
    
    const mainUrl= `https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`
    
    // const data = useSelector((state) => state.data.value)
    // const dispatch = useDispatch();

    // const handleValue = () =>{
    //     dispatch(fetchData())
    // }

    
    useEffect(()=>{
        
        axios.get(mainUrl)
            .then(res=>{
                setFetchInfo(res.data)
                console.log(res)
                
                console.log(fetchInfo)
            })      
            .catch(err=>{
                console.log(err)    
            })  
            
    }, [uno]);

    
    return (
        <div>
            <div className='px-5 py-5'>
                <h4>Fetch de la data solo un objeto</h4>
                {/* <Carousel/> */}
                {fetchInfo.map((item, i)=>{
                    return(
                        <div className=' flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-white-100 dark:border-gray-200 dark:bg-gray-200 dark:hover:bg-gray-400' key={i}>
                            <div className='flex flex-col justify-between p-4 leading-normal'>
                                <h2 className='font-bold text-s mb-2'>{item.title}</h2>
                                <p>{item.date}</p>
                                <p text-gray-700 text-base>{item.explanation.slice(0,200)}...</p>
                                <figcaption> {item.copyright}</figcaption>
                            </div>
                            <div>
                                <img className='flex-none w-full relative md:rounded-r-lg' alt={item.title} src={item.hdurl} />
                                
                            {/* flex-none w-48 relative */}
                                {/* <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' alt={item.title} src={item.hdurl} /> */}
                            </div>
                            {/* <div>
                                <h1>conceptos</h1>
                                <span>{item.concepts}</span>
                            </div> */}
                        </div>
                    )
                })}
            </div>
            <NavLink to={'/my-stars'}>mi estrella</NavLink>
        </div>
    )
}

export default Main