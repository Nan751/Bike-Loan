import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
import axios from "axios";
import './LoanAction.css';
import Register from "./Register";

const apiUrl = "https://localhost:7287/api/BikeLoan";

class LoanAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegister: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isBikeLoans: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isRegister: true });
    this.setState({ isBikeLoans: false });
  }
  onDetails() {
    this.setState({ isBikeLoans: true });
    this.setState({ isRegister: false });
  }

  onFormSubmit(data) {
    this.setState({ isRegister: true });
    this.setState({ isBikeLoans: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (id) => {
    this.setState({ isBikeLoans: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isRegister: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isRegister || this.state.isEditUser) {
      userForm = (
        <Register
          data-testid="adduser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (
      <div className="App">
        <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>
        <Container>
          <h1 style={{ textAlign: "center" }}>BIKE LOANS</h1>
          <hr></hr>
         
         
          <br></br>
          {!this.state.isRegister && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
          <br/>
          <br/>
          {!this.state.isRegister && (
            <Button className="Add1" variant="primary" onClick={() => this.onCreate()}>
              Add User
            </Button>
          )}
           {!this.state.isBikeLoans && (
            <Button className='details' variant="primary" onClick={() => this.onDetails()}>
              {" "}
              User Details
            </Button>
          )}
        </Container>
      </div>
    );
  }
}
export default LoanAction;
