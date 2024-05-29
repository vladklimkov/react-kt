import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchProducts, selectAllProducts, fetchProducts } from '../../ui/products/productsSlice'
import Product from '../product/Product'
import SearchBar from '../searchBar/SearchBar'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Products({ cfg }) {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)
    const [discount, setDiscount] = useState(cfg == 'discount' || cfg == 'sale')
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [sorting, setSorting] = useState(null)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [status, dispatch])

    let content
    if (status === 'loading') {
    } else if (status === 'succeeded') {
        let arr = searchProducts(products, from, to, discount, sorting)
        if (cfg == 'sale') {
            arr = arr.slice(0, 4)
        }
        content = arr.map((p) => (<Product product={p} key={crypto.randomUUID()} />))
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section>
            <Row>
                <Col>
                    {cfg == 'sale' ? null : <SearchBar onFrom={setFrom} onTo={setTo} onDiscount={setDiscount} onSorting={setSorting} discount={cfg != 'discount'} />}
                </Col>
            </Row>
            <Row className='row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-4'>
                {content}
            </Row>
        </section>
    )
};