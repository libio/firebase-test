import React, { Fragment,useEffect, useState } from 'react';
import { Card, Col, Jumbotron, Row,Container} from 'react-bootstrap';
import {db} from '../Firebase';
import Logo from './img/datos.png'
import DataTable from '@bit/adeoy.utils.data-table';

const Alldata = () => {

    const [datafirebase,setDatafirebase] = useState([]);

    const GetDatos = async() =>{
        const querysnapshot = await db.collection('my-data').get();
       
        const docs=[];
        querysnapshot.forEach(doc =>{
        docs.push({...doc.data(),id:doc.id})
       });
       setDatafirebase(docs);
       console.log(docs);
    };

    //useEffet 
    useEffect(() => {
        GetDatos();
        console.log(navigator.onLine);
        Datatable()

    },[]);
    const mostrar = () => {
        return datafirebase.map((item,index) =>(
            <tr key={item.dni} >
                <td >{index+1}</td>
                <td>{item.dni}</td>
                <td>{item.name}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.Cod_Verificacion}</td>
            </tr>
        ))
    }
  
    const columns = [
        { title: "Dni", data: "DNI" },
        { title: "Nombres", data: "Nombres" },
        { title: "Ap Paterno", data:"Ap_Paterno"},
        { title:"Ap Materno",data: "Ap_Materno" },
        { title: "Cod. Verifiacion", data: "Cod_Verificacion"}
      ];
    const click =(row) => {
        console.log(row);
    }

    const Datatable = () =>{
        
        return(
            <>
            <link   rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
                <Container>
                    <h5>Informacion en nuestra Database</h5>

                    <DataTable
                        data={datafirebase}
                        columns={columns}
                        striped={true}
                        hover={true}
                        responsive={true}
                        onClickRow={click}
                    />
                </Container> 
            </>
        )
    }
    return (
        <Fragment>
            <Container  className="container my-2 py-2">
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Informacion en nuestra DataBase</h3>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <img src={Logo} alt="Logo da Data Base"/>
                                </Card.Title>
                                <Row>
                                    {
                                        Datatable()
                                    }
                                    
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default Alldata;