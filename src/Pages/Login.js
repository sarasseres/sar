import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";
import "../Assetss/icons/css/all.min.css";

const Loginpage = () => {
  return (
    <div className="parentLogin">
      <div className="sideLogin">
        <Form className="form-center form-login">
          <div style={{ display: "flex", marginBottom: "25px" }}>
            <h1 className="joinTitle" style={{ cursor: "auto" }}>
              Sign in to your account
            </h1>
          </div>
          <FormGroup name="form">
            <div className={"form-group"}>
              <Label for="email">Email</Label>
              <div >
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required="required"
                  placeholder="Enter your email"
                  required
                  className=""
                />
                <i class="fas fa-envelope"></i>
                <i className="fas fa-times-circle"></i>
                <i
                  style={{ color: "#8FBD4B" }}
                  className="fas fa-check-circle"
                ></i>
              </div>
              {/* <FontAwesomeIcon className="errspan" icon={faEnvelope} /> */}
              <p className="">Input is not a valid e-mail!</p>
            </div>
          </FormGroup>
          <FormGroup name="form">
            <div className={"form-group"}>
              <Label for="password">Password</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className=""
                />
                <i class="fas fa-lock-open"></i>
                <i className="fas fa-times-circle"></i>
                <i
                  style={{ color: "#8FBD4B" }}
                  className="fas fa-check-circle"
                ></i>
                <i
                  className="far fa-eye-slash eyeIcon"
                  title="Show Password"
                ></i>{" "}
                :{" "}
                <i
                  class="far fa-eye eyeIcon"
                  style={{ right: "29px" }}
                  title="Hide Password"
                ></i>
              </div>
              {/* <FontAwesomeIcon className="errspan" icon={faUnlock} /> */}
              <p className="">Password must be at least 8 characters!</p>
            </div>
          </FormGroup>
          <div>
            <Button color="light" className="loginButton" title="Sign In">
              <b>Sign In</b>
            </Button>
          </div>
          <p>
            Don't have an account?{" "}
            <a href="/join" title="Join">
              Join here
            </a>
          </p>
        </Form>
      </div>
      <div className="sideImage"></div>
    </div>
  );
};

export default Loginpage;
