import React from "react";
import { connect } from "react-redux";
import { setText, addTodo } from "../actions"

const TodoForm  = ({ text, setText, addTodo }) => {
        return (
            <form 
                style={{display: 'flex', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.15)'}}
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    }
                }
            >
                <div className="input-field col s8">
                    <input
                        id="input-music"
                        type="text"
                        value={text}
                        onChange={e=>setText(e.target.value)}/>
                        <label htmlFor="input-music">Digite a tarefa</label>
                </div>
                <div className="col s4" >
                <button 
                    className="waves-effect waves-light  btn btn-primary" 
                    >Adicionar tarefa
                </button>
                </div>
            </form>
        );

}

function mapStateToProps (state){
    return {
        text: state.text
    }
}

const mapDispatchToProps = { setText, addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);