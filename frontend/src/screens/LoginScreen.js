import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { loginUser } from "../actions/userActions";
import FormContainer from "../Components/FormContainer";
import CheckOutSteps from "../Components/CheckOutSteps";
const LoginScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading,userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect); //'/shipping'
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler=(e)=>{
    e.preventDefault()
    
    dispatch(loginUser(email,password))
  }

  return (
    <>
      <FormContainer>
        <CheckOutSteps step1></CheckOutSteps>
        <h1>SignIn</h1>
        {error ? <Message variant="danger">{error}</Message> : 
        loading?
        <Loader />:
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>}
      </FormContainer>
    </>
  );
};

export default LoginScreen;
