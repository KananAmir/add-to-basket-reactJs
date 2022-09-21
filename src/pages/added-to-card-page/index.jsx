import React, { useContext } from 'react'
import './index.scss';
import { productsContext } from '../../context/productsContext';
import { Button } from 'antd';
import './index.scss'


const AddedToCardPage = () => {
    const { card, setCard } = useContext(productsContext);

    const handleRemove = (product) => {
        setCard(card.filter(q => q !== product))
    }
    return (
        <div id='added-to-card-page' className='grid place-items-center'>
            <table>
                <caption>Products in Basket</caption>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Remove from Card</th>
                    </tr>
                </thead>
                <tbody>
                    {card && card.map((product, index) => (
                        <tr key={product.id} >
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td style={{ color: 'red', fontWeight: 600 }} onClick={() => handleRemove(product, index)}>Remove</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button type="primary" onClick={() => setCard([])}>Empty Card</Button>
        </div>
    )
}

export default AddedToCardPage