import React, { useState } from 'react'
import './TodoList.css'
import { ImCross } from 'react-icons/im';
import ScrollArea from 'react-scrollbar';

const TodoList = () => {

    const [Todos, SetTodos] = useState([]);
    const [Items, SetItems] = useState([]);

    const handelInputChange = (event) => {
        SetTodos(event.target.value);
    };

    const handleAddTodo = () => {
        SetItems((olditems) => {
            return [...olditems, Todos];
        });
        SetTodos('');
    };
    const handleTododelete = (index) => {
        const updatedItems = [...Items];
        updatedItems.splice(index, 1);
        SetItems(updatedItems);
    };

    return (
        <div className="mainContainer">
            <div className="middleContent">
                <h1>ToDo List</h1>
                <div className='input-section'>
                    <input type="text" onChange={handelInputChange} />
                    <button onClick={handleAddTodo} id="add-btn">
                        +
                    </button>
                </div>
                <ScrollArea class="scrollbar-container">
                    <ul class="todo-list">
                        {Items.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleTododelete(index)} id="delete-btn">
                                    <ImCross />
                                </button>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </div>
    );
};

export default TodoList;