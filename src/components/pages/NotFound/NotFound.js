import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function NotFound() {
    return (
        <Container className='d-flex justify-content-center text-center'>
            <Row>
                <Col>
                    <img className='mt-5 pt-5' src={process.env.PUBLIC_URL + "/images/404.png"} alt="Page Not Found" />
                    <h1 className='mt-5 fs-1 fw-bold'>Page Not Found</h1>
                    <p className='text-muted py-3'>We’re sorry, the page you requested could not be found.<br />Please go back to the homepage.</p>
                    <Button to="/" as={Link} variant="" className='btn-card'>Go Home</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;