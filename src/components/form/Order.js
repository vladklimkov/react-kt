import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { client } from "../../api/client";
import { useSelector, useDispatch } from 'react-redux'
import { releaseCart } from "../ui/cart/cartSlice";


export default function Order({ count, cost }) {
    const dispatch = useDispatch()
    const [msg, setMsg] = useState('Order')
    const [variant, setVariant] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const out = await client.post('http://localhost:3333/order/send', data)
        if (out.data.status == 'OK') {
            setVariant('btn-card-done')
            setMsg('The Order is Placed')
            handleShow()
        }
    }

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        dispatch(releaseCart())
    };
    const handleShow = () => setShow(true);

    return (
        <Container fluid className="px-5 position-sticky" style={{top: '2rem'}}>
            <Modal show={show} onHide={handleClose} className="text-white">
                <Modal.Header closeButton className='bg-success'>
                    <Modal.Title className="fw-bold">Congratulations!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-success fw-bold'>
                    <p>Your order has been successfully placed on the website.</p>
                    <p>A manager will contact you shortly to confirm your order.</p>
                </Modal.Body>
            </Modal>

            <Container fluid className="bg-light rounded-3 border border-1 px-3 py-3">
                <Row>
                    <h3 className="fs-2 fw-bold pb-2">Order details</h3>
                </Row>
                <Row>
                    <Col md={{ span: 6 }}>
                        <p className="fs-2 text-muted">{count} items<br />Total</p>
                    </Col>
                    <Col md={{ span: 4 }} className="position-relative">
                        <p className="fs-1 fw-bold position-absolute bottom-0 start-50 translate-middle-x">${cost}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                            <Button variant={''} className={`btn-card ${variant}`} type="submit" size="lg">{msg}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}