import { useState } from "react";
import { useNavigate } from "react-router-dom";

//redux
import {  useDispatch,useSelector } from "react-redux";
//local start saves the star on the varaible star from redux
import { localStar } from '../features/newStar/starSlice'
//concactapi add a star on the variable data from redux
import { concatApiAndLocal } from '../features/data/dataSlice'
//
import { addLocalStorage } from '../features/newStar/crudSlice'
// import { useEffect } from "react";


const Agregar = () => {
    

    const [date, setDate] = useState([]);
    const [explanation, setExplanation] = useState('');
    const [url, setUrl] = useState('');
    const [media_type, setMediaType] = useState('');
    const [title, setTitle] = useState('');
    const [hdurl, setHdurl] = useState('');
    const [newStar, setNewStar] = useState(null)
 
    const navigate = useNavigate();
    
    // const star = useSelector(state => state.star);
    const local = useSelector(state => state.crud);
    const data = useSelector(state => state.data);
    
    const { value } = local;
    
    const { value: dataApi } = data;
    
    
    
    const dispatch = useDispatch();

    const savingLocalStar = (  actual ) => {
        // const spread = JSON.parse(window.localStorage.getItem('myStars'))
        window.localStorage.setItem('myStars', JSON.stringify(actual));
        dispatch(addLocalStorage(actual))

    }
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const creatingNewStar = {
            'date': date,
            'explanation': explanation,
            'url': url,
            'media_type': media_type,
            'title': title,
            'hdurl': hdurl
        }
        // crear una nueva funcion para dispatch que concatene la info actual mas el creado por el usuario
        //manejar dos variables data se renderiza en main y datauser se renderiza en mis estrellas 
        //data debe ser concatenado con la estrella agreda por el usuario 
        setNewStar(creatingNewStar);
        dispatch(concatApiAndLocal(creatingNewStar))
        // dispatch(localStar(creatingNewStar))
        savingLocalStar(creatingNewStar)
        navigate('/')
    }

    
    const handleOnChangeFile = (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            setHdurl(reader.result.toString());
        };
    }
    
    
    return (
        <div className="w-full max-w-xl mx-auto py-10 px-10 h-auto ">
            <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-3" htmlFor="inline-date">
                            Date
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input type='date' name='date' required onChange={(e) => setDate(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='inline-date'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-textarea">
                                Explanation
                            </label>
                    </div>
                    <div  className="md:w-3/3">
                        <textarea name="explanation" required onChange={(e) => setExplanation(e.target.value)} placeholder='Ingrese una descipcion sobre la estrella...' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  id='inline-textarea' />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-media_type">
                            Media type
                        </label>
                    </div>
                    <div className="md:w-3/3">
                        <input id='inline-media_type' type="text" name='media_type' required onChange={(e) => setMediaType(e.target.value)} placeholder='Ingrese el tipo de media' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-title">
                            Title
                        </label>
                    </div>
                    <div className="md:w-3/3">
                        <input id='inline-title' type="text" name='title' required onChange={(e) => setTitle(e.target.value)} placeholder='Ingrese el titulo de la imagen'  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                    </div>
                    
                </div>
            
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-url">
                            Url
                        </label>
                    </div>
                    <div className="md:w-3/3">
                        <input id='inline-url' type="text" name='url' required onChange={(e) => setUrl(e.target.value)} placeholder='Ingrese la url de la imagen' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> 
                    </div>
                </div>
                
                {/* jola */}
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor='hdurl'   className="lg:block md:inline-block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Upload HDimg
                        </label>
                        <input type="submit" value="Register Star" className=" px-2 mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded  md:text-center" />
                        
                    </div>
                    <div className="md:w-3/3">
                        <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id='hdurl'
                        type="file"
                        name="hdurl"
                        required
                        onChange={handleOnChangeFile} 
                        />
                    </div>
                    
                </div>
                <div className="md:flex md:items-center mb-6 ">
                    <div>{!!hdurl ? <img src={hdurl} alt="estrella" className="lg:h-52 sm:h-20 " /> : ""}</div>
                </div>
            </form> 
        </div>
    );
};

export default Agregar;


  // const savingLocalStar = (saveStar) => {
    //     // if(!newStar.find(star => star.title === )){
            
    //     // }
    //     let localStorage = localStorage.getItem('myStars');
        
    //     setNewStar([...newStar,localStorage])
    //     // console.log('estera')
    //     // console.log(saveStar);
    //     // const starObject = JSON.parse(window.localStorage.getItem('myStars')); 
    //     // // window.localStorage.setItem('myStars', JSON.stringify(saveStar));
    //     // dispatch(addLocalStorage(starObject))
    //     // console.log(starObject)
    // }
    
    // useEffect(() => {
    //     let localStorage = localStorage.getItem('myStars');
    //     // const creatingNewStar = {
    //     //     'date': date,
    //     //     'explanation': explanation,
    //     //     'url': url,
    //     //     'media_type': media_type,
    //     //     'title': title,
    //     //     'hdurl': hdurl
    //     // }
    //     // setNewStar(creatingNewStar);
        
    //     // let push  = [...newStar, JSON.parse() ,localStorage]
    //     if(localStorage){
    //         setNewStar(JSON.parse(localStorage))
    //     }
        
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setNewStar('myStars', JSON.stringify(newStar));
    // }, [])
    
    
    
    // const pushestrella = () =>{
    // }