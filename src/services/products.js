const URL = 'https://fakestoreapi.com/products'

export const getProducts = async () => {
    try {
        const response = await fetch(URL)
        if (!response.ok) throw new Error('Network response was not ok')
        return await response.json()
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`)
        if (!response.ok) throw new Error('Network response was not ok')
        return await response.json()
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error)
        throw error
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${URL}/category/${category}`)
        if (!response.ok) throw new Error('Network response was not ok')
        return await response.json()
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error)
        throw error
    }
}

export const getAllCategories = async () => {
    try {
        const response = await fetch(`${URL}/categories`)
        if (!response.ok) throw new Error('Network response was not ok')
        return await response.json()
    } catch (error) {
        console.error('Error fetching categories:', error)
        throw error
    }
}