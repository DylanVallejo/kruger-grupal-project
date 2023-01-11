// import { useDispatch,useSelector } from 'react-redux'
// import { fetchData } from '../features/data/dataSlice'
import axios from 'axios';
import { useState,useEffect} from 'react';

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
            <div>
                <h4>Fetch de la data solo un objeto</h4>
                {fetchInfo.map((item, i)=>{
                    return(
                        <div className=' w-60 bg-white shadow rounded' key={i}>
                            <h2 className='font-bold text-s mb-2'>{item.title}</h2>
                            <p>{item.date}</p>
                            <img className='w-full' alt={item.title} src={item.hdurl} />
                            <p text-gray-700 text-base>{item.explanation}</p>
                            <figcaption>{item.copyright}</figcaption>
                            <div>
                                <h1>conceptos</h1>
                                {/* <span>{item.concept_tags}</span> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main