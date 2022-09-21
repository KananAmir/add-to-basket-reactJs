import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import { getProducts } from '../../services/productService';
import Spinner from '../../components/spinner';
import { productsContext } from '../../context/productsContext';

const ProductListPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { card, setCard } = useContext(productsContext);

    const getData = async () => {
        setProducts(await getProducts());
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    const addToCard = (product) => {
        card.some(q => q.id === product.id)
            ?
            setCard([...card])
            :
            setCard([...card, product])
    }

    return (
        <div id='products-list-page' className='grid place-items-center'>
            {isLoading
                ?
                <Spinner />
                :
                <>
                    <table>
                        <caption>Products Table</caption>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Quantity Per Unit</th>
                                <th>Phone</th>
                                <th>ADD TO CARD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.data.map(product => (
                                <tr key={product.id} >
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td> <Link to={`${product.id}`}>Product Detail</Link></td>
                                    <td style={{ color: 'red', fontWeight: '600' }} onClick={() => addToCard(product)}> Add to Card</td>
                                </tr>
                            ))}
                        </tbody>
                    </table></>

            }

        </div>
    )
}

export default ProductListPage