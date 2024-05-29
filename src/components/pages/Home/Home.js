import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offer from '../../form/Offer';
import Categories from '../../ui/categories/Categories';
import Products from '../../ui/products/Products';
import { Link } from 'react-router-dom'
import styles from './Main.module.css';

function Home() {
    return (
        <div>
            <Container fluid className='home-poster mb-5'>
                <Row className='py-5 px-3'>
                    <Col>
                        <h1>Amazing Discounts<br />on Garden Products!</h1>
                        <Button as={Link} to="/sale" size="lg" variant="" className='btn-card px-5'>Check out</Button>
                    </Col>
                </Row>
            </Container>

            <Container className='pt-3'>
                <Row>
                    <Col className='position-relative'>
                        <h2 className='fs-1 fw-bold mb-4'>Categories</h2>
                        <hr className={`position-absolute top-0 ${styles.start60} translate-middle w-75`} />
                        <Button className='position-absolute top-0 end-0' as={Link} to="/categories" size="sm" variant="light">All categories</Button>
                        <Categories count={4} width={238} />
                    </Col>
                </Row>

                <Row className='mb-4'>
                    <Col>
                        <Offer />
                    </Col>
                </Row>

                <Row>
                    <Col className='position-relative mt-5'>
                        <h2 className='fs-1 fw-bold mb-4'>Sale</h2>
                        <hr className={`position-absolute top-0 ${styles.start60} translate-middle w-75`} />
                        <Button className='position-absolute top-0 end-0' as={Link} to="/sale" size="sm" variant="light">All sales</Button>
                        <Products cfg={'sale'} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;