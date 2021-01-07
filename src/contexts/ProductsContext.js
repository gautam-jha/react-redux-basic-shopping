import React, { createContext, useState, useEffect } from 'react';
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const getProducts = () => {
        return fetch('https://my-json-server.typicode.com/prograk/demo/items')
            .then((res) => res.json())
            .then((res) => setProducts(res));
    };
    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        products && (
            <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
        )
    );
};

export default ProductsContextProvider;
