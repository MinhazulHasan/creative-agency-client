import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Bottom = () => {
    return (
        <section style={{backgroundColor: '#FBD062'}}>
            <Container>
                <Row>
                    <Col lg={{ span: 5, offset: 1 }} md={5} className="d-none d-md-block">
                        <h1 className='pt-5 pb-4'><b>Let us handle your project, professionally.</b></h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }}>
                        <Form className='pt-5'>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Your email address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Your name / company’s name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" rows='10' placeholder="Your message" />
                            </Form.Group>
                            <Form.Group>
                                <button className="common-btn py-2 px-5">Send</button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <p className="blockquote text-center pt-5 pb-"> © {(new Date()).getFullYear()}, Minhazul Hasan - All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Bottom;