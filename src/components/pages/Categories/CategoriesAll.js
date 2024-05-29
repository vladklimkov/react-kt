import Button from 'react-bootstrap/Button';
import Categories from '../../ui/categories/Categories';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CategoriesAll() {
    return (
        <Container className='mt-4'>
            <Row>
                <Col className='position-relative'>
                    <h1 className='fw-bold mb-4'>Categories</h1>
                    <Categories width={200} />
                </Col>
            </Row>
        </Container>
    );
};
