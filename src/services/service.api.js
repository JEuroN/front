const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

const getAll = async () => {
    try{
        const result = await instance.get('/')
        .then(r=>r.data)
        .catch(err=>err)

        return result;
    }catch(err){

    }
}

const getOne = async () => {
    try{
        const result = await instance.get('/2')
        .then(r=>r)
        .catch(err=>err)

        console.log(result);
    }catch(err){

    }
}

const createOne = async (name, price) => {
    try{
        console.log(name, price)
        const result = await instance.post('/', {productName: name, productPrice: price})
        .then(r=>r.data)
        .catch(err=>err)
        console.log(result)
        return result
    }catch(err){

    }
}

const updateOne = async (id, input) => {
    try{
        const result = await instance.put('/', {productName: input, id})
        .then(r=>r.data)
        .catch(err=>err)

        return result
    }catch(err){

    }
}

const deleteOne = async (id) => {
    try{
        const result = await instance.delete(`/${id}`)
        .then(r=>r.data)
        .catch(err=>err)

        return result
    }catch(err){

    }
}

module.exports = {getAll, getOne, updateOne, deleteOne, createOne}