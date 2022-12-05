import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const apiUrl = "https://localhost:7287/api/BikeLoan";


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllLoan")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>UserName</th>
                <th>email</th>
                <th>PhoneNumber</th>
                <th>Password</th>
                <th>ConfirmPassword</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.userName}</td>
                  <td>{user.email }</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td>
                  <td>
                    {/* <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.id)}
                    >
                      Edit
                    </Button> */}
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
