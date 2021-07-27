import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Jumbotron,
  Figure,
} from "react-bootstrap";
import Logo from "./img/man.png";
import {auth} from '../Firebase';

const Registrarse = (props) => {
  const { register, errors, handleSubmit } = useForm({});
  const [registro, setRegistro] = useState([]);

  const onSubmit = async(data, e) => {
     
     try{
        await auth.createUserWithEmailAndPassword(registro.email,registro.password);
        console.log("Usuario se registro exitosamente");
        props.close.onHide();
     }
     catch(error){
        console.log("Erro: "+error);
     }
     e.target.reset();
  };
  const handleChange = (event) => {
    setRegistro({
      ...registro,
      [event.target.name]: event.target.value,
    });
  };
  const VerData = () => {
    console.log(registro);
    console.log(validacionPassword());
  };

  const validacionPassword = () => {
    // return (registro.password1===registro.password2)? true: false;
  };

 const Registrarse = () => {
   {}
 }
  return (
    <Card>
      <Card.Body>
        <Jumbotron>
          <Card.Title className="text-center">
            <Figure>
              <Figure.Image className="rounded-circle" src={Logo} />
            </Figure>
          </Card.Title>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      ref={register({
                        required: "Ingrese su e-mail",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Direccion de e-mail invalido",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-danger text-small d-block mb-2">
                        {errors.email.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      ref={register({
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-danger text-small d-block mb-2">
                        {errors.password.message}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword2">
                    <Form.Label>Confirmar Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password_repeat"
                      placeholder="Password"
                      onChange={handleChange}
                      ref={register({
                        validate: (value) =>
                          value === registro.password ||
                          "La contraseña no coincide",
                      })}
                    />
                    {errors.password_repeat && (
                      <span className="text-danger text-small d-block mb-2">
                        {errors.password_repeat.message}
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col md={3}></Col>
              </Row>
            </div>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
                <Button block className="my-1" variant="dark" type="submit" onClick={Registrarse}>
                  Registrarse
                </Button>
              </Col>
              <Col md="3"></Col>
            </Row>
          </form>
        </Jumbotron>
      </Card.Body>
    </Card>
  );
};
export default Registrarse;
