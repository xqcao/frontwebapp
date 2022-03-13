import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../stores/todos/TODO_actions";
import { v4 as uuidv4 } from "uuid";

const Todos = (props) => {
  const { addtodo_todis, statetodo, update_onetodo, delete_one_todo } = props;
  const emptytodo = { name: "", description: "", id: "" };
  const [onetodo, setOnetodo] = useState(emptytodo);
  const [updateflag, setUpdateflag] = useState(false);
  const addTOdo = () => {
    const id = uuidv4();
    console.log(id);
    addtodo_todis(onetodo, id);
    setOnetodo(emptytodo);
  };
  const update_todo = (one) => {
    setUpdateflag(true);
    setOnetodo(one);
  };
  const remove_todo = (id) => {
    delete_one_todo(id);
    console.log(`remove one: ${id}`);
  };
  const [todolist, setTodolist] = useState([]);

  return (
    <div>
      <h2>Todo page</h2>
      <div>
        <div>
          <label htmlFor="todoname">Name:</label>
          <input
            type="text"
            name="todoname"
            value={onetodo.name}
            onChange={(e) => setOnetodo({ ...onetodo, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="tododesc">Description:</label>
          <input
            type="text"
            name="tododesc"
            value={onetodo.description}
            onChange={(e) =>
              setOnetodo({ ...onetodo, description: e.target.value })
            }
          />
        </div>
        <div>
          {updateflag ? (
            <button
              onClick={() => {
                update_onetodo(onetodo);
                setUpdateflag(false);
                setOnetodo(emptytodo);
              }}
            >
              Update
            </button>
          ) : (
            <button onClick={addTOdo}>Add</button>
          )}
        </div>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {statetodo.map((el, idx) => (
            <tr key={idx + "-" + el.name}>
              <td style={{ display: "none" }}>{el.id}</td>
              <td>{idx}</td>
              <td>{el.name}</td>
              <td>{el.description}</td>
              <td>
                <button onClick={() => update_todo(el)}>Update</button>
                <button onClick={() => remove_todo(el.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  statetodo: state.todoreduce,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addtodo_todis: (t, id) => {
      t.id = id;
      dispatch(actions.add_todo(t));
    },
    update_onetodo: (n) => dispatch(actions.update_todo(n)),
    delete_one_todo: (id) => dispatch(actions.delete_todo(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
