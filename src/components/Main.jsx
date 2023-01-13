import { useDispatch ,useSelector} from 'react-redux'
import { fetchDataMain } from '../features/data/dataSlice'
import axios from 'axios';
import { useEffect} from 'react';

function Main() {

    // const [fetchInfo, setFetchInfo] = useState([]);
    
    const dispatch = useDispatch();
    const infoRedux = useSelector(state => state.data)
    
    const { value } = infoRedux
    
    console.log(value)
    const zero = 'un solo fetch'
    console.log("api??????")
    
    console.log(infoRedux)

    
    const key = '3vIRJmcLMjl1pQ0peu0exjGVox0U3cK8bUgWRrJC';
    const mainUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`;

    // const data = useSelector((state) => state.data.value)
    // const dispatch = useDispatch();

    // const handleValue = () =>{
    //     dispatch(fetchData())
    // }


    useEffect(() => {

        axios.get(mainUrl)
            .then(res => {
                // setFetchInfo(res.data)
                dispatch(fetchDataMain(res.data))
            })
            .catch(err => {
                console.log(err)
            })
            console.log('only one fetch')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zero]);


    return (
        <div>
            <div className='px-5 py-5'>
                <h4>Fetch de la data solo un objeto</h4>
                
                {!!value ? 
                
                    value.map((item, i)=>{
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
                                    
                                </div>
                            </div>
                        )
                    }) : <div>Loading Data...</div>}

                {/* <Carousel/> */}
                {/* {fetchInfo.map((item, i)=>{
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
                                
                            </div>
                        </div>
                    )
                })} */}
            </div>

        </div>
    );
}

export default Main;