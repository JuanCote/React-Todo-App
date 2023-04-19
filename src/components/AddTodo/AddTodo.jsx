import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import s from "./AddTodo.module.css";

export function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    if (value === "") {
      return;
    }

    setTodo([
      ...todo,
      {
        id: new Date().getTime(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      saveTodo();
    }
  }

  return (
    <Row className="">
      <Col className="d-flex mt-2">
        <Form.Control
          maxLength={50}
          className={s.input}
          value={value}
          onKeyPress={handleKeyPress}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter task"
        />
        <Button className={s.button} onClick={saveTodo}>
          <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
        </Button>
      </Col>
    </Row>
  );
}
