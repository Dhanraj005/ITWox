import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;
    // console.log(value,name)
    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    const { email, password } = user;

    const getUserArr = localStorage.getItem("useritwox");
    console.log(getUserArr);

    if (email === "") {
      alert("email field is require");
    } else if (!email.includes("@")) {
      alert("please enter valide email");
    } else if (password === "") {
      alert("password field is require");
    } else if (password.length < 5) {
      alert("password length must be greater than five !!");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);

        const userLogin = userData.filter((elem, i) => {
          return elem.email === email && elem.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalide details");
        } else {
          console.log("logine succesful");

          localStorage.setItem("userLogin", JSON.stringify(userLogin));

          history("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex ">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 mb-2">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={getData}
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={getData}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Button
                  variant="primary"
                  className="col-lg-8"
                  onClick={saveData}
                  style={{ backgroundColor: "rgba(178,75,92,1)" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
            <p className="mt-2 col-lg-6">
              Dont have an account <span ><NavLink to="/">Sign Up</NavLink></span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Login;
