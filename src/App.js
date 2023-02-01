import { Col, Container, Row } from "react-bootstrap";
import { AddForm } from "./component/form";
import { Acordion } from "./component/Acordion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    }
  };
  const [questionsList, setQuestionList] = useState([]);
  let data = questionsList;
  if (localStorage.getItem("items") != null) {
    data = JSON.parse(localStorage.getItem("items"));
  }
  const addHandler = (q, a) => {
    let questionUbdate = [...data];
    questionUbdate.push({ id: Math.random(), q: q, a: a });
    localStorage.setItem("items", JSON.stringify(questionUbdate));
    setQuestionList(questionUbdate);
    notify("تمت الاضافة بنجاح", "success");
  };
  const deleteHandler = () => {
    localStorage.setItem("items", JSON.stringify([]));
    setQuestionList([]);
    notify("تم حذف الكل بنجاح", "success");
  };
  const onDeleteItem = (id) => {
    const res = data.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(res));
    setQuestionList(res);
    notify("تم حذف السؤال بنجاح", "success");
  };

  return (
    <div className="body py-3">
      <Container>
        <Row className="justify-content-center">
          <Col md="4" className="">
            <div className="fs-4 text-center">اسئلة واجوبة شائعة</div>
          </Col>
          <Col md="8">
            <AddForm notify={notify} onAdd={addHandler}></AddForm>
            <Acordion
              onDeleteItem={onDeleteItem}
              questions={questionsList}
            ></Acordion>
            {localStorage.getItem("items") != null && data.length >= 1 && (
              <button onClick={deleteHandler} className="btn-style w-100">
                مسح الكل
              </button>
            )}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
