import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => {
        return(
            <ul className="collection">
            {
              todos.map((todo, index) => {
                return (
                    <li className="collection-item"
                      key={index}
                      style={{
                        // textDecoration: todo.done ? 'line-through' : null,
                        fontWeight: todo.done ? 'bold' : null,
                        // color: todo.done ? 'green' : 'red',
                      }}
                      onClick={e => toggleTodo(todo) }>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <i class="material-icons" style={{paddingRight:10}}>{todo.done ? 'check_box' : 'check_box_outline_blank'}</i>
                            {todo.text}
                        </div>
                    </li>
                );
              })}
          </ul>
        );
}

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = { toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);