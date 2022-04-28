import React, {createContext, useState} from 'react'

export const EjemploContext = createContext();

const EjemploProvider = (props) => {

    const [saludos, setsaludos] = useState('hola')
    return ( 
        <EjemploContext.Provider value={{saludos, setsaludos}}>
            {props.children}
        </EjemploContext.Provider>
     );
}
 
export default EjemploProvider;