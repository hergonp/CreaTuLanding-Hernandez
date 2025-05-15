import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { useParams } from 'react-router'
import { getByCategory, getProducts } from '../services/firebaseServices'
import Loader from '../components/Loader'
import ItemList from '../components/ItemListContainer/ItemList'

const ItemListContainer = () => {
    const [list, setList] = useState([])
    const {loading, setLoading} = useGlobalStates()
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchLista = category ? getByCategory : getProducts
        fetchLista(category && category).then(res => {
            setList(res)
            setLoading(false)
        })
    }, [category])
    return (
        <div>{loading ? <Loader/> : <ItemList list = {list}/>}</div>
    )
}

export default ItemListContainer