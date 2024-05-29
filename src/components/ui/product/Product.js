import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { add } from '../../ui/cart/cartSlice';
import { price, discount, altPrice } from '../../ui/products/productsSlice'
import styles from './Product.module.css';
import Col from 'react-bootstrap/Col';


export default function Product({ product }) {
    const dispatch = useDispatch()

    return (<Col className='d-flex justify-content-center'>
        <Card className='mb-5' as={Link} to={`/product/${product.id}`} style={{ width: '15rem', height: '20rem', 'textDecoration': 'none' }}>
            <Card.Img variant="top" src={"http://localhost:3333" + product.image} alt={product.title} className={styles.cover} />
            <Card.ImgOverlay className={styles.place}>
                <div className={styles.hide} >
                    <Button className='position-absolute top-50 start-50 mt-2 translate-middle mx-0 px5 btn-card' onClick={(e) => {
                        e.preventDefault() // skip to open page product/id
                        dispatch(add(1, product.id))
                    }} variant="">Add to cart</Button>
                </div>

                {product.discont_price ? <Badge className='position-absolute end-0 mx-3' bg="success">{discount(product)}</Badge> : null}
            </Card.ImgOverlay>
            <Card.Body className=''>
                <Card.Text className=''>{product.title}</Card.Text>
                <Card.Title className='d-inline fs-4 fw-bold'>${price(product)}</Card.Title>
                <Card.Text className='mx-3 d-inline text-decoration-line-through text-muted'>{altPrice(product)}</Card.Text>
            </Card.Body>
        </Card></Col>
    )
}
