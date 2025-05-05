import { useState } from 'react';
import {createContext} from 'react';

export const CounterContext = createContext(null);

export function CounterProvider({children})
{
    alert("this context rendered");
    const [count , setCount] = useState(0);

    const increament = ()=>{
        setCount(count+1);
    }

    const decreament = ()=>{
        setCount(count-1);
    }

    return (
        <CounterContext.Provider value={{count,setCount,increament,decreament}}>
            {children}
        </CounterContext.Provider>
    );
}