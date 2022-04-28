import React from "react";

const Boton = ({func, texto}) => {

    return(
        <button style={{width: '500px', height: '200px'}} 
        onClick={func}>{texto}</button>
    )
}

export default Boton;