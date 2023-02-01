import React from "react";
import { Accordion, Row } from "react-bootstrap";

export const Acordion = ({ questions, onDeleteItem }) => {
  let data = questions;
  if (localStorage.getItem("items") != null) {
    data = JSON.parse(localStorage.getItem("items"));
  }
  const deleteItem = (id) => {
    onDeleteItem(id);
  };
  return (
    <Row className="my-2">
      <Accordion>
        {data.length >= 1 ? (
          data.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header>{item.q}</Accordion.Header>
              <Accordion.Body className="d-flex justify-content-between">
                <div>{item.a}</div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="btn-style"
                >
                  مسح
                </button>
              </Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <h1 className="fs-4 text-center p-5">لايوجد اسئلة</h1>
        )}
      </Accordion>
    </Row>
  );
};
