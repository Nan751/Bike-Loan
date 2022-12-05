import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "https://localhost:7287/api/BikeLoan";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("BUserName")).toBeInTheDocument();
    expect(screen.getByText("BEmail")).toBeInTheDocument();
    expect(screen.getByText("BPhoneNumber")).toBeInTheDocument();
    expect(screen.getByText("BPassword")).toBeInTheDocument();
    expect(screen.getByText("BConfirmPassword")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        BUserName : "testfname1",
        BEmail: "testlname2",
        BPhoneNumber: "testemail1",
        BPassword: "testmob1",
        BConfirmPassword: "testAddress1",
      },
      {
        id: 2,
        BUserName : "testfname3",
        BEmail: "testlname22",
        BPhoneNumber: "testemail",
        BPassword: "testmob1",
        BConfirmPassword: "tes1",
      },
      {
        id: 3,
        BUserName : "testfname11",
        BEmail: "testlname21",
        BPhoneNumber: "testemail11",
        BPassword: "testmob11",
        BConfirmPassword: "test1",
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetAllLoan`);
  });
});
