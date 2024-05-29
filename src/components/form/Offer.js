import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { client } from "../../api/client";
import React, { useState } from 'react';

export default function Offer() {
    const [msg, setMsg] = useState('Get a discount')
    const [variant, setVariant] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const out = await client.post('http://localhost:3333/sale/send', data)
        if (out.data.status == 'OK') {
            setVariant('btn-offer-done')
            setMsg('Request Submitted')
        }
    }

    return (
        <Container fluid>
            <Container fluid className="offer mt-5">
                <Row><h3 className="fs-1 fw-bold text-center pb-5">5% off on the first order</h3></Row>
                <Row className="px-3">
                    <Col md={{ span: 4, offset: 8 }}>
                        <Form onSubmit={handleSubmit(onSubmit)} className="d-grid">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="lg" placeholder="Name" {...register("name", { required: true })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="lg" placeholder="Phone number" {...register("tel", { required: true })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" size="lg" placeholder="Email" {...register("email", { required: true })} />
                            </Form.Group>
                            <Button variant={''} className={`btn-offer ${variant}`} type="submit" size="lg">{msg}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}