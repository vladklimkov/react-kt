import Button from 'react-bootstrap/Button';
import { selectAllProducts, fetchProducts } from '../../ui/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Order from '../../form/Order';
import CartProduct from '../../ui/cartProduct/CartProduct'
import { selectCount } from '../../ui/cart/cartSlice';
import styles from '../Home/Main.module.css';

function Cart() {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllProducts)
    const status = useSelector((state) => state.products.status)
    const error = useSelector((state) => state.products.error)
    const cart = useSelector(selectCount);
    let count = 0
    let cost = 0

    // Здесь придётся запросить из магазина обновления цен, количество и наличие самого товара. По этому зделать запрос на все товары.
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [status, dispatch])

    let content = []
    if (status === 'loading') {
    } else if (status === 'succeeded') {
        Object.keys(cart).forEach(key => {
            const c = cart[key]
            count += c
            const product = posts.find(p => p.id == key)
            const price = product.discont_price || product.price
            cost += (c * price)
            content.push(<CartProduct as={Link} to={'product/' + product.id} product={product} key={crypto.randomUUID()} />)
        })
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <Container className='mt-4'>
            <Row>
                <Col className='position-relative'>
                    <h1 className='fw-bold fs-1'>Shopping cart</h1>
                    <hr className={`position-absolute top-0 ${styles.start60} translate-middle w-75`} />
                    <Button as={Link} to="/sale" size="sm" variant="light" className='position-absolute top-0 end-0'>All sales</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col lg={7}>
                    {content.length ? content : <div><p>Looks like you have no items in your basket currently.</p><Button as={Link} to="/products" size="lg" variant="" className='btn-card'>Continue Shopping</Button></div>}
                </Col>
                <Col lg={5}>
                    {content.length ? <Order count={count} cost={cost} /> : null}
                </Col>
            </Row>
        </Container>
    );
}
export default Cart;