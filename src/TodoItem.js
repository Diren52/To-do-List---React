import React, {Component} from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
        <li className="task">
            <span
                className={
                    completed? 'done' : ''
                }
                onClick={onToggle}
            >
                {name}
            </span>
            <span className="remove" onClick={onDelete}> X </span>
        </li>
    );
    
export default TodoItem;