import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [loginData, setLoginData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useNavigate();

  const todayDate = new Date().toDateString().slice(0, 10);

  
  // console.log(todayDate)

  const Dob = () => {
    const getUser = localStorage.getItem("userLogin");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);

      // console.log(user)
      setLoginData(user);

      const userBirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
          console.log("okey");
          handleShow();
        }, 3000);
      }
    }
  };


  useEffect(() => {
    Dob();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details Page</h1>
          <h1> Welcome {loginData[0].name} !!!</h1>

          

          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo,Have a nice Day !!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
