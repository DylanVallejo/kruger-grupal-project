import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Agregar = () => {
    

    const [date, setDate] = useState([]);
    const [explanation, setExplanation] = useState('');
    const [url, setUrl] = useState('');
    const [media_type, setMediaType] = useState('');
    const [title, setTitle] = useState('');
    const [hdurl, setHdurl] = useState('');
    
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    
    const  {value} = data;
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // let updateObject = [...value, ]
        // const addStar = () => {

        // }

        // crear una nueva funcion para dispatch que concatene la info actual mas el creado por el usuario
        //manejar dos variables data se renderiza en main y datauser se renderiza en mis estrellas 
        //data debe ser concatenado con la estrella agreda por el usuario 
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
        <div className="w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-date">
                            Date
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input type='date' name='date' required onChange={(e) => setDate(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='inline-date'/>
                    </div>
                </div>
                <textarea name="explanation" required onChange={(e) => setExplanation(e.target.value)} placeholder='Ingrese una descipcion sobre la estrella...' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                <input type="text" name='media_type' required onChange={(e) => setMediaType(e.target.value)} placeholder='Ingrese el tipo de media' />
                <input type="text" name='title' required onChange={(e) => setTitle(e.target.value)} placeholder='Ingrese el titulo de la imagen' />
                <input type="text" name='url' required onChange={(e) => setUrl(e.target.value)} placeholder='Ingrese la url de la imagen' /> 
                <div>
                    <label htmlFor='hdurl' >Subir Imagen</label>
                    <input 
                        type="file"
                        name="hdurl"
                        required
                        onChange={handleOnChangeFile} 
                    />
                    <div>{!!hdurl ? <img src={hdurl} alt="estrella" className="h-60" /> : ""}</div>
                    <input type="submit" value="Register Star"  />
                </div>
            </form> 
        </div>
    );
};

export default Agregar;