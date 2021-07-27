import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styls.css'
import Header from './components/header';
import React, { Fragment ,useState} from 'react';
import Links from './components/links';
import {Modal,Button,Card,Jumbotron} from 'react-bootstrap';
import Logins from './components/Login';

import Home from './components/Home';

import './Styls.css'
import AllData from './components/Alldata';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Registrarse from './components/Registrarse';


function App(){
  const [modalShowregister, setModalShowRegister] = useState(false);
  const [modalShowlogin, setModalShowLogin] = useState(false);
  const Register = (props) =>{
    return(
    
    <Modal 
        {...props}
        size="lg"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="title">
            <h4 >Registro de usuario</h4>
          </Modal.Title>
        </Modal.Header>
          <Registrarse close={props}/>  
    </Modal>

    );
}
const Login = (props) => {
  return(
    <Modal 
        {...props}
        size="lg"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="title">
            <h4 >Login</h4>
          </Modal.Title>
        </Modal.Header> 
        <Logins close={props}/>
    </Modal>
  );
}

const ShowRegister = () => {
  setModalShowRegister(true)
}
const ShowLogin = () => {
  setModalShowLogin(true)
}
const CloseLogin = () => {
  setModalShowLogin(false)
}
  return(
        <div >
          <Register
            show={modalShowregister}
            onHide={() => setModalShowRegister(false)}
          />
          <Login
            show={modalShowlogin}
            onHide={() => setModalShowLogin(false)}
          />
          <Router>
            <Header ShowReg={ShowRegister} ShowLog={ShowLogin}/>
            <Switch >
              <Route path="/AllData">
                <AllData/>
              </Route>
              <Route path="/Buscar">
                <Links />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
    );

  }



export default App;
