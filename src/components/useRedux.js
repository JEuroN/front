import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, upValue} from '../redux/reducerEjemplo';

const EjemploRedux = () => {

    const selector = useSelector((state)=>state.ejemplo);
    const dispatch = useDispatch()

    console.log(selector)
    return ( 
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(upValue(3))}>Up value</button>
        </div>
     );
}
 
export default EjemploRedux;