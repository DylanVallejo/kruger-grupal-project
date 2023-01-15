import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

const Onestar = () => {
    
    const { titleStar } = useParams();

    const data = useSelector(state => state.data)
    
    //desestructuring value from data 
    const { value } = data;
    
    return (
        <>
            <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-gradient-to-tl from-cyan-400 via-indigo-400 to-blue-500">
            
                {
                    value.filter((item) => {
                        if( item.title.toLowerCase().includes(titleStar.toLowerCase())){
                            return item
                        }
                        
                    }).map((detalles,index) => {
                        return(
                                <div key={index} className='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2  '>
                                    <div className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 '>
                                        <h2 className='mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-black'>{detalles.title}</h2>
                                        <p className='  text-sm leading-5 font-medium text-white sm:text-slate-500 dark:sm:text-slate-600'>{detalles.date}</p>
                                        <p className=' font-medium text-white sm:text-slate-500 dark:sm:text-slate-600'>{detalles.copyright}</p>
                                    </div>
                                    <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
                                        <img src={detalles.hdurl} alt={detalles.title} className='w-full h:60 object-cover rounded-lg sm:h-90 sm:col-span-2 lg:col-span-full'/>
                                    </div>
                                    <p className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-1000'>{detalles.explanation}</p>
                                    
                                </div>
                        )
                    })
                }
        
            </div>
        
        </>
    );
};

export default Onestar;