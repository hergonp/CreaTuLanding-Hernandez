import { useContext, useState, createContext } from 'react'

export const GlobalStates = createContext()

const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    const calcularProductos = cart.reduce((total, prod) => {
        return total + prod.quantity
    }, 0)

    const calcularTotal = cart.reduce((total, prod) => {
        return total + prod.quantity * prod.price
    }, 0)

    return (<GlobalStates.Provider value={{cart, setCart, loading, setLoading, calcularTotal, calcularProductos
    }}>
        {children}
    </GlobalStates.Provider>)

}

export default ContextProvider

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}