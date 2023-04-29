import axios from "axios"

const GetBoughtProduct = function () {
    return new Promise((resolve, reject) => {
        axios.get('https://bozor-market.onrender.com/api/buy').then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

const DeleteBougthProduct = function (id) {
    return new Promise((resolve, reject) => {
        axios.delete(`https://bozor-market.onrender.com/api/buy/${id}`)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
    })
}

export {
    DeleteBougthProduct,
    GetBoughtProduct
}