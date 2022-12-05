import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register";

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    BId: "",
    BUserName: "",
    BEmail: "",
    BPhoneNumber: "",
    BPassword : "",
    BConfirmPassword: "",
  };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <Register onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("BUserName").value).toBe("");
    expect(getByTestId("BEmail").value).toBe("");
    expect(getByTestId("BPhoneNumber").value).toBe("");
    expect(getByTestId("BPassword ").value).toBe("");
    expect(getByTestId("BConfirmPassword ").value).toBe("");
  });
});
