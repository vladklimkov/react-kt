import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectById, fetchCategory } from '../../ui/category/categorySlice'
import Product from '../../ui/product/Product';
import { searchProducts, selectAllProducts, fetchProducts } from '../../ui/products/productsSlice'
import SearchBar from '../../ui/searchBar/SearchBar'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Category() {
    let { id } = useParams();
    const dispatch = useDispatch()
    const data = useSelector(state => selectById(state, id))
    const [discount, setDiscount] = useState(false)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [sorting, setSorting] = useState(null)
    const status = data ? data.status : 'idle'

    useEffect(() => {
        if (!data) {
            dispatch(fetchCategory(id))
        }
    }, [data, dispatch])

    let content, title
    if (status === 'loading') {
    } else if (status === 'succeeded') {
        const products = searchProducts(data.category.data, from, to, discount, sorting)
        content = products.map((p) => (<Product product={p} key={crypto.randomUUID()} />))
        title = data.category.category.title
    } else if (status === 'failed') {
        content = <div>{data.error}</div>
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchBar onFrom={setFrom} onTo={setTo} onDiscount={setDiscount} onSorting={setSorting} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <section className="d-flex flex-wrap align-items-start justify-content-center">
                        {content}
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
