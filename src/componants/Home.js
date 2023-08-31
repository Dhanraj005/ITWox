import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { NavLink } from "react-router-dom";
import{motion} from 'framer-motion'
const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
const [data,setData]=useState([]);

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
    const { name, email, date, password } = user;

    if (name === "") {
      alert("name field is require");
    } else if (email === "") {
      alert("email field is require");
    } else if (!email.includes("@")) {
      alert("please enter valide email");
    } else if (date === "") {
      alert("date field is require");
    } else if (password === "") {
      alert("password field is require");
    } else if (password.length < 5) {
      alert("password length must be greater than five !!");
    } else {
      console.log("data added success");


localStorage.setItem("useritwox",JSON.stringify([...data,user]));

    }
  };

  return (
    <>
      <motion.div initial={{y:"5rem",x:"3rem" , opacity:0}} transition={{duration:2,type:"spring"}} animate={{y:0,opacity:1}}className="container mt-3">
        <section className="d-flex ">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 mb-2">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={getData}
                  name="name"
                  type="email"
                  placeholder="Enter your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={getData}
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>DOB </Form.Label>
                <Form.Control onChange={getData} type="date" name="date" />
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
              Alredy have an account <span><NavLink to="/login">Sign In</NavLink></span>
            </p>
          </div>
          <SignImg />
        </section>
      </motion.div>
    </>
  );
};

export default Home;
