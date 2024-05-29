import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import { add } from '../../ui/cart/cartSlice';
import { discount, price, altPrice } from '../../ui/products/productsSlice'

const Product = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchWeather = async () => {
            const out = await fetch(`http://localhost:3333/products/${id}`)
            const v = await out.json()
            setProduct(v[0])
        };
        fetchWeather()
    }, [id])

    return (
        <Container className='mt-4'>
            <Row>
                <Col md={7} className='pb-4'>
                    <img className='img-fluid' src={'http://localhost:3333' + product.image} />
                </Col>
                <Col md={5}>
                    <Row>
                        <Col md='auto'>
                            <h1 className='fs-3 fw-bold'>{product.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>
                            <p className='fs-1 fw-bold'>${price(product)}</p>
                            <p className='fs-3 text-decoration-line-through text-muted px-3 align-self-center'>{altPrice(product)}</p>
                            <Badge className='align-self-start' bg="success">{discount(product)}</Badge>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col sm={4} md={6} lg={4}>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" onClick={(e) => setQuantity(quantity - 1)}>-</Button>
                                <Form.Control value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
                                <Button variant="outline-secondary" onClick={(e) => setQuantity(quantity + 1)}>+</Button>
                            </InputGroup>
                        </Col>
                        <Col md={8}>
                            <Button variant="" className='btn-card' onClick={() => dispatch(add(quantity, product.id))}>Add to cart</Button>
                        </Col>
                    </Row>
                    <Row>
                        <p className='fw-bold'>Description</p>
                        <div>{product.description}</div>
                        <a className="text-muted pt-3">Read more</a>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;