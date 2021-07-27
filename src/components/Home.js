import React from 'react';
import {Carousel, Col, Row} from 'react-bootstrap';

const Home = () => {
    return(
        <div className="my-5 py-5">
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Carousel>
                       <center > <h3><strong>Encuentra la informacion que buscas</strong></h3></center>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://codesource.io/wp-content/uploads/2020/02/Understanding-Firebase-Realtime-Database-using-React.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Firebase + React</h3>
                        <p>Encuentra y almacena infomacion en firebase</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://miro.medium.com/max/855/1*mrE1-U3_tKk2qw3pSDDrfA.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/encontrar-personas.jpg"
                        alt="logo busqueda por dni"
                        />

                        <Carousel.Caption>
                        <h3>Busca personas</h3>
                        <p>Encuentra a personas segun su numero de D.N.I</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={2}></Col>
            </Row>

        </div>
    );
}
export default Home;