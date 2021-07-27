
import React from 'react';
import {Button} from 'react-bootstrap';

export default class  Consultar extends React.Component{
    constructor(props){
        super(props);
        this.state =( {
            dni:"48106237"
        })
    }
    render() {
        return(
            <Button variant="danger" onClick={()=>this.props.ConsultarApi(this.state.dni)}>Consultar</Button>
        );
    }

}