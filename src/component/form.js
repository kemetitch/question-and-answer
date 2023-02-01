import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
export const AddForm = ({ onAdd, notify }) => {
  const qref = useRef();
  const aref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterq = qref.current.value;
    const entera = aref.current.value;
    if (entera === "" && enterq === "") {
      notify("من فضلك اكمل البيانات ", "error");
      return;
    }
    onAdd(enterq, entera);
    qref.current.value = "";
    aref.current.value = "";
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col md="5">
          <Form.Control ref={qref} type="text" placeholder="ادخل السؤال" />
        </Col>
        <Col md="5">
          <Form.Control ref={aref} type="text" placeholder="ادخل الاجابة" />
        </Col>
        <Col md="2" className="px-md-0">
          <button className="btn-style w-100" type="submit">
            اضافة
          </button>
        </Col>
      </Row>
    </Form>
  );
};
