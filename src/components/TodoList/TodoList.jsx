import { useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSave,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodos = todo.map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodos);
    setEdit(null);
  }

  function handleKeyPress(e, id) {
    if (e.key == "Enter") {
      saveTodo(id);
    }
  }

  return (
    <div className={s.main}>
      {todo.map((item) => (
        <div className={s.col} key={item.id}>
          {edit == item.id ? (
            <Form.Control
              onKeyPress={(e) => handleKeyPress(e, item.id)}
              className={s.input}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              maxLength={50}
            />
          ) : (
            <div className={item.status ? s.title : s.titleFalse}>
              {item.title}
            </div>
          )}
          {edit == item.id ? (
            <Button className={s.button} onClick={() => saveTodo(item.id)}>
              <FontAwesomeIcon icon={faSave} />
            </Button>
          ) : (
            <div className="button-wrap">
              <Button className={s.button} onClick={() => deleteTodo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className={s.button}
                onClick={() => editTodo(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </Button>
              <Button className={s.button} onClick={() => statusTodo(item.id)}>
                <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
