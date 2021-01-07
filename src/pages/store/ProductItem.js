import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import styles from './ProductsGrid.module.scss';

const ProductItem = ({ product }) => {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    return (
        <div className="card card-body" style={{ border: '0px' }}>
            <img
                style={{ display: 'block', margin: '0 auto 10px', maxHeight: '200px' }}
                className="img-fluid"
                src={product.image}
                alt=""
            />
            <p className={styles.title}>{product.name}</p>
            <p className="text-left price" style={{ fontSize: 11 }}>
                {formatNumber(product.price.actual)}
                <strike>{formatNumber(product.price.display)}</strike>
            </p>
            <div className="text-right">
                {isInCart(product) && (
                    <button
                        onClick={() => increase(product)}
                        className={('btn btn-outline-secondary btn-sm', styles['btn-custom'])}>
                        Add more
                    </button>
                )}

                {!isInCart(product) && (
                    <button
                        onClick={() => addProduct(product)}
                        className={('btn btn-secondary btn-sm', styles['btn-custom'])}>
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
