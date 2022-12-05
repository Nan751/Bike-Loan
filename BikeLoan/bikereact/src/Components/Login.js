import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  

class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            email: '',  
            password: '',
              
        }  
  
        this.password = this.password.bind(this);  
        this.email = this.email.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    email(event) {  
        this.setState({ email: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    
    Login(event) {  
        // debugger;  
        fetch(`https://localhost:7287/api/BikeLoan/Login`, {  
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("");  
            })  
    }  
    
  
    render() {  
  
        return (  
            <div className='box'>
            <div class="main">
            <div className="fields"> 
            
                <Container className='Container'>  
                    <Row className="user-box">  
                        <Col md="9" lg="7" xl="6">  
                        <h2 className='title'>  LOGIN  </h2>
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div  className="mb-2 pageheading">  
                                                <div href="./Register" className="col-sm-12 btn btn-primary">  
                                                   
                             </div>  
                                            </div>  
                                            <div className='email'>
                                                
                                            <InputGroup >  
  
                                                <Input type="text" onChange={this.email} placeholder="Enter Email" />  
                                            </InputGroup> 
                                            </div> 
                                            <div className='password'>
                                            <InputGroup >  
  
                                                <Input type="password" onChange={this.password} placeholder="Enter Password" />  
                                            </InputGroup> 
                                            </div> 
                                            <Button className='btn-Login' onClick={this.Login} color="success" block><Link to="/Login">Login</Link></Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div> 
            </div> 
            </div>
        );  
    }  
}  
  
export default Login;