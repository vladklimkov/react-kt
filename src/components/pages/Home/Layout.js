import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Cart } from '../../ui/cart/Cart';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import styles from './Main.module.css';

// Базовый способ организации react-router v6
// https://github.com/remix-run/react-router/tree/dev/examples/basic
// https://github.com/remix-run/react-router/tree/dev/examples

export default function Layout() {
    return (
        <>
            <Container className="py-3">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-xl-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img alt="logo" height="73" src={process.env.PUBLIC_URL + "/images/logo.png"} />
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className={styles.mlink}><Link to="/" className="fs-5 me-3 py-2 link-body-emphasis text-decoration-none">Main Page</Link></li>
                        <li className={styles.mlink}><Link to="/categories" className="fs-5 me-3 py-2 link-body-emphasis text-decoration-none">Categories</Link></li>
                        <li className={styles.mlink}><Link to="/products" className="fs-5 me-3 py-2 link-body-emphasis text-decoration-none">All products</Link></li>
                        <li className={styles.mlink}><Link to="/sale" className="fs-5 me-3 py-2 link-body-emphasis text-decoration-none">All sales</Link></li>
                    </ul>

                    <div className="col-xl-3 text-end">
                        <Cart />
                    </div>
                </header>
            </Container>

            <main>
                <Outlet />
            </main>
            
            <footer className='container mt-5'>
                <h2 className='fw-bold fs-1'>Contact</h2>
                <Container className="p-3">
                    <Row className='row-cols-1 row-cols-md-2 g-3'>
                        <Col md={7}>
                            <Card className="bg-light">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Phone</Card.Subtitle>
                                    <Card.Title className='fs-2'>+7 (499) 350-66-04</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5}>
                            <Card className="bg-light">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Socials</Card.Subtitle>
                                    <Card.Title>
                                        <img alt="insta" height="41" src={process.env.PUBLIC_URL + "/images/insta.png"} />
                                        <img alt="tel" height="41" src={process.env.PUBLIC_URL + "/images/tel.png"} />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='row-cols-1 row-cols-md-2 g-3 mt-2'>
                        <Col md={7}>
                            <Card className="bg-light">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
                                    <Card.Title className='fs-2'>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5}>
                            <Card className="bg-light">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Working Hours</Card.Subtitle>
                                    <Card.Title className='fs-2'>24 hours a day<br />&#x200b;</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='py-5 px-1'>
                            {/* <img alt="map" height="270" src={process.env.PUBLIC_URL + "/images/map.png"} /> */}
                            <iframe className='responsive' src="https://maps.google.com/maps?q=IThub college, Dubininskaya Ulitsa, 96, Moscow, 115093&amp;t=m&amp;z=14&amp;ie=UTF8&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};
