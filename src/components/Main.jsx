import { useDispatch ,useSelector} from 'react-redux'
import { fetchDataMain } from '../features/data/dataSlice'
import axios from 'axios';
// import { useEffect} from 'react';
import Loading from './Loading';
import styles from '../components/styles/Main.module.css'
import { 
    // useParams 
        useNavigate,
    } from 'react-router-dom';
// import { v4 as uuid } from 'uuid'



function Main() {

    // const [fetchInfo, setFetchInfo] = useState([]);
    
    const dispatch = useDispatch();
    const infoRedux = useSelector(state => state.data)
    
    const { value } = infoRedux

    // const params = useParams();
    const navigate = useNavigate();
    console.log(value)
    // const zero = 'un solo fetch'
    // console.log("api??????")
    // console.log(infoRedux)

    const key = '3vIRJmcLMjl1pQ0peu0exjGVox0U3cK8bUgWRrJC';
    const mainUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=6`;

    // const data = useSelector((state) => state.data.value)
    // const dispatch = useDispatch();

    // const handleValue = () =>{
    //     dispatch(fetchData())
    // }

    const handleFetch = (e) => { 
        e.preventDefault();
        axios.get(mainUrl)
        .then(res => {
            // setFetchInfo(res.data)
            dispatch(fetchDataMain(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    // handleFetch();
    
    // useEffect(() => {
    
    //     axios.get(mainUrl)
    //     .then(res => {
    //         // setFetchInfo(res.data)
    //         dispatch(fetchDataMain(res.data))
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [zero]);
    
    // useEffect(() => {
    
    //     axios.get(mainUrl)
    //         .then(res => {
    //             // setFetchInfo(res.data)
    //             dispatch(fetchDataMain(res.data))
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         console.log('only one fetch')
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [zero]);


    return (
        <div className ={styles.gradiente}>
            <div className='px-5 py-5 content-center p-6 shadow-2xl'>
                {/* <h4>Fetch de la data solo un objeto</h4> */}
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={ e => handleFetch(e)}> Fetch</button>
                {/* <button> Fetch</button> */}
                
                
                {
                    !!value ? 
                
                        value.map((item, i)=>{
                            return(

                                <div className=' flex  m-5 flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-white-100 dark:border-gray-400 dark:bg-gray-20 dark:hover:bg-purple-200 '  key={i}>
                                    <div className=' flex flex-col justify-between p-10 leading-normal'>
                                        <h2 className='font-bold text-s mb-2'>{item.title}</h2>
                                        <p className='leading-5 px-1 py-1'>{item.date}</p>
                                        {/* text base eliminar? */}
                                        <p className='leading-5 px-1 py-1' text-base>{item.explanation.slice(0,200)}...</p>
                                        <figcaption> {item.copyright}</figcaption>
                                        {/* <div>
                                            <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={ () => {navigate(`one-star/${item.title}`)} }> DETALLES</button> */}
                                            {/* onClick={()=>{navigate('api/'+ key._id)} */}
                                        {/* </div> */}
                                        <button onClick={ () => {navigate(`one-star/${item.title}`)}} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-white-100 rounded-md group-hover:bg-opacity-0">
                                                Detalles
                                            </span>
                                        </button>       
                                    </div>
                                    <div className='h-300 w-200 md:rounded-r-lg  object-fill box-content'>
                                        <img className='flex-none  relative md:rounded-r-lg  ' alt={item.title} src={item.hdurl} />
                                    </div>
                                </div> 
                            )
                        }) 
                    : 
                    <Loading/>
                }
            </div>

        </div>
    );
}

export default Main;