import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar({
    onFrom,
    onTo,
    onDiscount,
    onSorting,
    discount = true
}) {
    return (
        <>
            <Form>
                <Row className="align-items-center">
                    <Col md={4} className="my-1">
                        <Row>
                            <Form.Label column xs="auto" className='fw-bold'>Price</Form.Label>
                            <Col sm="4">
                                <Form.Control className='mb-3' type="text" placeholder="from" onChange={(e) => onFrom(e.target.value)} />
                            </Col>
                            <Col sm="4">
                                <Form.Control className='mb-3' type="text" placeholder="to" onChange={(e) => onTo(e.target.value)} />
                            </Col>
                        </Row>
                    </Col>
                    {discount ? <Col md="auto">
                        <Form.Check reverse id="discounted" className='d-flex align-items-center mb-3'>
                            <Form.Check.Label className='fw-bold'>Discounted items</Form.Check.Label>
                            <Form.Check.Input className='checkbox-success mt-0 mx-2' type='checkbox' onChange={(e) => onDiscount(e.target.checked)} />
                        </Form.Check>
                    </Col> : null}


                    <Col md="4">
                        <Row className='mb-3'>
                            <Form.Label className='fw-bold' column xs="auto">Sorted</Form.Label>
                            <Col>
                                <Form.Select onChange={(e) => onSorting(e.target.value)}>
                                    <option value="default">by default</option>
                                    <option value="newest">newest</option>
                                    <option value="decrease">price:high-low</option>
                                    <option value="increase">price:low-high</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

