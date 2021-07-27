import React, { Fragment, useState, useEffect } from "react";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Table,
  Jumbotron,
  Card,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import "../Styls.css";

import Logo from "./img/busqueda-de-datos.png";
const Linksfrom = (props) => {
  // useState modal for
  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(true);
  //el Dom que esta al tanto
  useEffect(() => {
    //ConsultaApi();
    //ServerCaptcha();
  }, []);
  // useState para almacenar datos de
  const [datos, setDatos] = useState([]);
  //Validacion de formulario con useform
  const { register, errors, handleSubmit } = useForm();

  const [info, setInfo] = useState({
    dni: "",
  });
  const [captcha, setCaptcha] = useState({
    recaptchaValue: "",
  });

  // datos almacenados despues de la respuesta del server de google
  const [resserver, setResserver] = useState([]);
  var Key_secret = "6LftW78UAAAAAE9-F4GYKVoEFtRAlQdsv5fUn6B1";

  // Recogiendo informacion desde formularios
  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.length < 8) {
      setClassname({
        name: "invisible",
      });
    }
  };
  const onSubmit = (data, e) => {
    // e.target.reset();
  };
  const ConsultaApi = async () => {
    if (info.dni.length) {
      const response = await fetch(
        "https://dni.optimizeperu.com/api/persons/" + info.dni
      );
      const json = await response.json();
      try {
        if (json.dni != undefined) {
          setDatos(json);
          props.Agregar(json);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const ServerCaptcha = async () => {
    try {
      //fetch('https://dni.optimizeperu.com/api/persons/'+dni)
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify?secret=" +
          Key_secret +
          "&response=" +
          captcha.recaptchaValue +
          "&remoteip=user_ip_address"
      );
      const json = await response.json();
      // almacenado la respuesta json a setResserver {seteando como lo dirian}
      setResserver(json);
      console.log(json);
    } catch (error) {
      console.log("Error en la consulta de fetch al server de google" + error);
    }
  };

  const onChange = (value) => {
    setCaptcha({
      recaptchaValue: value,
    });
  };
  const Validacion = () => {
    ConsultaApi();
    if (info.dni.length === 8 && datos.nombres !== "") {
      setClassname({
        name: "visible",
      });
      setClasscap({
        name: "invisible",
      });
    }
  };
  // useState para modificar la clasname
  const [className, setClassname] = useState({
    name: "invisible",
  });
  //
  const [classcap, setClasscap] = useState({
    name: "justify-content-md-center my-3 visible",
  });
  async function postData(
    url = "https://api.reniec.cloud/dni/48106237",
    data = {}
  ) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const AlertFetch = () => {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  };

  const Mostrarsi = () => {
    if (show) {
      AlertFetch();
    }
  };

  const MostraData = () => {
    return (
      <Table responsive="sm" className="margin-auto">
        <thead>
          <tr>
            <th>#</th>
            <th>DNI</th>
            <th>Nombres</th>
            <th>A.Paterno</th>
            <th>A.Materno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{datos.dni}</td>
            <td>{datos.name}</td>
            <td>{datos.first_name}</td>
            <td>{datos.last_name}</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  // Modal

  const ModalRegistro = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Error en la consulta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Tipo de error: </h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <Fragment>
      <div className="my-3 py-3">
        <ModalRegistro show={modalShow} onHide={() => setModalShow(false)} />
        <Container className="flex my-5 py-5">
          <Row className="" id="grid">
            <Col sm={2}></Col>
            <Col sm={8}>
              <Card className="text-center">
                <Card.Header>
                  <h3>Buscar por DNI</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <img src={Logo} alt={"Logo de Busqueda"} />
                  </Card.Title>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group class="aling-self-center text-center">
                      <div>
                        <Row>
                          <Col md="3"></Col>
                          <Col md="6">
                            <Form.Control
                              type="text"
                              name="dni"
                              placeholder="Numero de dni"
                              ref="dni"
                              className="col-sm my-2"
                              // value={this.state.value}
                              onChange={handleChange}
                              ref={register({
                                required: {
                                  value: true,
                                  message: "Campo es requerido",
                                },
                                minLength: {
                                  value: 8,
                                  message: "tiene que ingresar 8 digitos",
                                },
                                maxLength: {
                                  value: 8,
                                  message: "tiene que ser solo 8 digitos",
                                },
                              })}
                            />
                            {errors.dni && (
                              <span className="text-danger text-small d-block mb-2">
                                {errors.dni.message}
                              </span>
                            )}
                          </Col>
                          <Col md="3"></Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <Col md="3"></Col>
                          <Col md="6">
                            <Button
                              id="Consultar"
                              onClick={Validacion}
                              block
                              className="my-1"
                              type="submit"
                            >
                              Consultar
                            </Button>
                          </Col>
                          <Col md="3"></Col>
                        </Row>
                        {Mostrarsi()}
                      </div>
                    </Form.Group>
                  </Form>
                  <Row className={className.name}>
                    <Col className="justify-content-md-center my-3">
                      {MostraData()}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Linksfrom;
