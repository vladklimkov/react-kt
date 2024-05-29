import Products from '../../ui/products/Products';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Sale() {
    return (
        <Container className='mt-4'>
            <Row>
                <Col className='position-relative'>
                    <h1 className='fw-bold mb-4'>Discounted items</h1>
                    <Products cfg={'discount'} />
                </Col>
            </Row>
        </Container>
    );
};
