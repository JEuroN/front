import React, {useState, useEffect, useContext} from 'react';
import { EjemploContext } from '../context/contextejemplo';
import { getAll, updateOne, deleteOne, createOne } from '../services/service.api';

const Productos = () => {

    const [products, setProducts] = useState([]);
    const [updateName, setUpdateName] = useState('');
    const {saludos, setsaludos} = useContext(EjemploContext);
    const [form, setForm] = useState({
        nombre: '',
        precio: 0
    })

    console.log(saludos)
    useEffect(()=>{
        async function fetchData() {
            const productos = await getAll();
            setProducts([...productos.msg])
        }
        fetchData();
    }, []);

    const crearProduct = () => {
        createOne(form.nombre, Number(form.precio))
        window.location.reload();
    }

    const updateProducto = (productId, updateName) => {
        updateOne(productId, updateName)
        window.location.reload();
    }
   
    const deleteProducto = (productId) => {
        deleteOne(productId)
        window.location.reload();
    }

    const renderProducts = products.map((item)=>{
        const {productName, productPrice, createdAt, productId} = item
        return(
            <div style={{height: '10vh', display: 'flex', flexDirection: 'column'}} key={productId}>
                <span>Nombre: {productName}</span>
                <span>Precio: {productPrice}</span>
                <span>Creado: {createdAt}</span>
                <button style={{width: '100px'}} onClick={()=>updateProducto(productId, updateName)}>Update</button>
                <button style={{width: '100px'}} onClick={()=>deleteProducto(productId)}>Delete</button>
            </div>
        )
    })

    return ( 
        <div>
        <input placeholder='Nombre' onInput={(e)=>setUpdateName(e.target.value)}></input>
        <div>
            <input placeholder='Nombre' onInput={(e)=>setForm({...form, nombre: e.target.value})}></input>
            <input placeholder='Precio' onInput={(e)=>setForm({...form, precio: e.target.value})}></input>
            <button onClick={crearProduct}>Crear</button>
        </div>
        <button onClick={()=>setsaludos('adios')}>Despedir</button>
            {renderProducts}
        </div>
     );
}
 
export default Productos;
