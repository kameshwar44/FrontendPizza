import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
      <div className="container w-50 mx-auto shadow p-5">
      <form>
       
        <div class="form-group w-85  mx-auto  ">
        <h1>Contact</h1>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      </Container>
    </>
  );
}

export default Contact;
