import React, { useContext, useState } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {
    const { products } = useContext(ProductsContext);

    const [data, setData] = useState(products);

    const sortBy = (type, order) => {
        if (order === 'desc') {
            products.sort((a, b) =>
                typeof a[type] == 'object' ? a.price.actual - b.price.actual : a[type] - b[type],
            );
            products.reverse();
        } else {
            products.sort((a, b) =>
                typeof a[type] == 'object' ? a.price.actual - b.price.actual : a[type] - b[type],
            );
        }
        setData(products);

        // console.log(products);
    };

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-12">
                    <span className={styles.p__3}>Sort By</span>
                    <button onClick={() => sortBy('price', 'desc')} className={styles.p__3}>
                        Price --High Low
                    </button>
                    <button onClick={() => sortBy('price', 'asc')} className={styles.p__3}>
                        Price --Low High
                    </button>
                    <button onClick={() => sortBy('discount', 'desc')} className={styles.p__3}>
                        Discount
                    </button>
                </div>
            </div>
            <div className={styles.p__grid}>
                {data.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            <div className={styles.p__footer}></div>
        </div>
    );
};

export default ProductsGrid;
