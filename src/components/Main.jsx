import { useDispatch,useSelector } from 'react-redux'
import { fetchData } from '../features/data/dataSlice'

function Main() {
    
    const data = useSelector((state) => state.data.value)
    const dispatch = useDispatch();

    const handleValue = () =>{
        dispatch(fetchData())
    }
    console.log(data)
    
    return (
        <div>
        
            <button onClick={handleValue}>
                aumentar
            </button>
        </div>
    )
}

export default Main