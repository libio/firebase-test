import React, { useState } from 'react';
import{Button} from 'react-bootstrap';

export default function Saludar(props)
{
    // Asignacion por destructing 
    const {userInfo, myfuncion}=props;
    const{nombres="Anonimo", edad}= userInfo;

    // uso de hook de estados

    const [stateCar, setStateCar] =useState(false);

    const EncenderApagar=()=>{
        //setStateCar(!stateCar);
        setStateCar(prevValue=>!stateCar);
    }
   // console.log(props);
    return (
        <>
        <Button variant="danger" onClick={()=>myfuncion(nombres)}>Saludar</Button>
       <h1>Soy. {nombres} estudiante de ingenieria informatica y tengo {edad} años</h1>
       <br/>

       <h3>El coche esta: {stateCar ?"Encendido":"Apagado"}</h3>
       <Button variant="info" onClick={EncenderApagar}>Encender/Apagar</Button>
        </>
    );
    
}