import React, { useState } from "react";
import { Card, Figure, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "./img/security.png";
import Facebook from "./img/facebook.png";
import Google from "./img/google.png";
import { useForm } from "react-hook-form";
import { auth } from "../Firebase";
import { Link } from "react-router-dom";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { register, errors, handleSubmit } = useForm({});


  const onSubmit = async(data, e) => {
    try{
        await auth.signInWithEmailAndPassword(email,pass)

        console.log('Bienvenido al sistema!!!');
        // Cerrando modal
        props.close.onHide()
    }
    catch(error){
        
        console.log("Erro: "+error);
       // e.target.reset();
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
        <Row className="mt-2">
            <Col md="3"></Col>
            <Col md="6" className="text-center">
              <Figure>
                <Figure.Image className="rounded-circle" src={Facebook}/>
                <Figure.Image className="rounded-circle ml-4" src={Google} />
              </Figure>
            </Col>
            <Col md="3"></Col>
          </Row>
         {/*  <Figure>
            <Figure.Image className="" src={Logo} />
          </Figure> */}
        </Card.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
                <h5>Utiliza tu correo</h5>
                <Form.Group>
                  <Form.Control
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                <Form.Group>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
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
              </Col>
              <Col md="3"></Col>
            </Row>
          </div>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Button
                block
                className="my-1"
                variant="info"
                type="submit"
              >
                Inicia sesión
              </Button>
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className="mt-2">
            <Col md="3"></Col>
            <Col md="6" className="text-center">
              <label>¿No tienes una cuenta? </label> 
              <a className="ml-1" href="#"><strong>Registrate gratis</strong></a> <br/> 
              <a href="#"><strong>¿Olvidaste tu contraseña?</strong></a> 
            </Col>
            <Col md="3"></Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
};
export default Login;
