import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      //userId: '',
      id: "",
      bUserName: "",
      bEmail: "",
      bPhoneNumber: "",
      bPassword : "",
      bConfirmPassword: "",
    };

    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Add User</h2>;
      actionStatus = <b>Save</b>;
    }

    return (
      <div>
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="bUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  name="bUserName"
                  data-testid="bUserName"
                  value={this.state.bUserName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group controlId="bEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="bEmail"
                  data-testid="bEmail"
                  value={this.state.bEmail}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </Form.Group>
              
              <Form.Group controlId="bPhoneNumber">
                <Form.Label>MobileNo</Form.Label>
                <Form.Control
                  type="text"
                  name="bPhoneNumber"
                  data-testid="bPhoneNumber"
                  value={this.state.bPhoneNumber}
                  onChange={this.handleChange}
                  placeholder="PhoneNumber"
                />
              </Form.Group>
              <Form.Group controlId="bPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="bPassword"
                  data-testid="bPassword"
                  value={this.state.bPassword}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="bConfirmPassword">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  type="text"
                  name="bConfirmPassword"
                  data-testid="bConfirmPassword"
                  value={this.state.bConfirmPassword}
                  onChange={this.handleChange}
                  placeholder="ConfirmPassword"
                />

              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="userId"
                  value={this.state.id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;
