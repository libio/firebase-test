import React,{Component} from 'react';
import { Container, Row,Col } from 'react-bootstrap';


export default class contador extends Component {
    constructor(props){
        super(props)
        {
            this.state=
            {
                count:0
           
            }
        }
    }
    Incrementar=(e)=>{
        e.preventDefault();
        this.setState(function (prevState) {
            return{
                count:prevState.count+1
            }  
        })
    }
        
    

    Reset=(e)=>{
        e.preventDefault();
        this.setState({
            count:0
        });

    };
    Decrementar=(e)=>{
        e.preventDefault();
        this.setState(function(prevState){
            if(this.state.count>=1)
            return{
                count: prevState.count-1
            }
        })

    }
    handleclick=()=>{

    }
    
    render() {
        return(
            <div className="counter">
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <div clasname="contador" onClick={this.despedirse}>{this.state.count}</div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col onClick={this.Decrementar}>Decrementar</Col>
                        <Col onClick={this.Reset}>Reset</Col>
                        <Col onClick={this.Incrementar}>Incrementar</Col>
                        
                    </Row>
                </Container>
            </div>

        );
    }
}