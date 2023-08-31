import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const getName = localStorage.getItem("userLogin");
  console.log();

  const history = useNavigate();
  const userLogOut = () => {
    localStorage.removeItem("userLogin");
    history("/");
  };
  const getJson = () => {
    history("/get");
  };
 const getPost=()=>{
history("/post")
 }

//  const GetComment=()=>{
//   history("/comment")
//  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/details">ItWox</Navbar.Brand>
          {getName ? (
            <Nav className="me-auto">
              <Nav.Link style={{ color: "white" }}>
                <h1>{JSON.parse(getName).name}</h1>
              </Nav.Link>
              <button type="button" onClick={userLogOut}>
                Log Out
              </button>
              <button type="button" onClick={getJson}>
                Get Request
              </button>
              <button type="button" onClick={getPost}>Put</button>
              <button type="button" >Comments</button>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link href="#home">JSON Get</Nav.Link>
              <Nav.Link href="#features">Comments</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
