import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner';
import { getProductDetail } from '../../services/productService';
import { productsContext } from '../../context/productsContext';
import './index.scss'

const ProductDetail = () => {

    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { card, setCard } = useContext(productsContext);

    let { id } = useParams();
    const navigate = useNavigate();

    const getSupplier = async () => {
        setProduct(await getProductDetail(id));
        setIsLoading(false);
    }

    useEffect(() => {
        getSupplier();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCard = (product) => {
        card.some(q => q.id === product.data.id)
            ?
            setCard([...card])
            :
            setCard([...card, product.data])
    }

    return (
        <div id='supplier-detail' className='text-center p-12'>
            {isLoading
                ?
                <Spinner />
                :
                <>
                    <h1 className='text-4xl font-extrabold tracking-widest text-[#04aa6d] mb-6'>{product.data.name}</h1>
                    <ul>
                        <li>ID: <span>{product.data.id}</span></li>
                        <li>Unit Price: <span>{product.data.unitPrice}</span></li>
                        <li>Quantity Per Unit: <span>{product.data.quantityPerUnit}</span></li>
                        <li>Units in Stock: <span>{product.data.unitsInStock}</span></li>
                        <li>Units in Stock: <span>{product.data.unitsInStock}</span></li>
                    </ul>
                    <button className='px-8 py-3 bg-[#1A2238] border border-current text-white mt-6' onClick={() => navigate(-1)}>Go back</button>
                    <button className='add-to-card' onClick={() => addToCard(product)}>Add to Card</button>
                </>
            }

        </div>
    )
}

export default ProductDetail