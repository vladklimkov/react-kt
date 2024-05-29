import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { add, change } from '../../ui/cart/cartSlice';
import { selectCount } from '../cart/cartSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { altPrice, price } from '../products/productsSlice';
import { Link } from 'react-router-dom';


function CartProduct({ product }) {
    const dispatch = useDispatch()
    const cart = useSelector(selectCount)
    const quantity = cart[product.id]

    return (
        <>
            <Alert variant="light" className='bg-white' onClose={() => dispatch(add(-quantity, product.id))} dismissible>
                <Row>
                    <Col md={{ span: 3 }}>
                        <Image src={"http://localhost:3333" + product.image} fluid />
                    </Col>
                    <Col md={{ span: 9 }}>
                        <Row className='mt-3 mx-1'>
                            <Link className='text-decoration-none px-0 link-dark' to={'/product/'+product.id}>{product.title}</Link>
                            </Row>
                        <Row className='mt-5'>
                            <Col md={{ span: 4 }}>
                                <InputGroup className="mb-3">
                                    <Button variant="outline-secondary" onClick={() => dispatch(add(-1, product.id))}>-</Button>
                                    <Form.Control value={quantity} onChange={(e) => dispatch(change(+e.target.value, product.id))} />
                                    <Button variant="outline-secondary" onClick={() => dispatch(add(1, product.id))}>+</Button>
                                </InputGroup></Col>
                            <Col md={{ span: 'auto' }}>
                                <p className='fs-3 fw-bold d-inline'>${price(product)}</p>
                                <span className='px-3 d-inline text-decoration-line-through text-muted'>{altPrice(product)}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Alert>
        </>
    );
}

export default CartProduct;