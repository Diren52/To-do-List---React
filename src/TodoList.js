import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';
import * as apiCalls from './api';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
          todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }
  
    componentWillMount(){
        this.loadTodos();
    }
    
    async loadTodos(){
        let todos = await apiCalls.getTodos();
        this.setState({todos});        
    } 
    
    async addTodo(val){
        let newTodo = await apiCalls.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    
    async deleteTodo(id){
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id)
        this.setState({todos: todos})
    }

    async toggleTodo(todo){
        let updateTodo = await apiCalls.updateTodo(todo);
            const todos = this.state.todos.map(todo => (todo._id === updateTodo._id)
            ? {...todo, completed: !todo.completed}
            : todo 
            );
            this.setState({todos: todos})
    }
    
    render(){
        const todos = this.state.todos.map((t) => (
                <TodoItem
                    key={t._id}
                    {...t}
                    onDelete={this.deleteTodo.bind(this, t._id)}
                    onToggle={this.toggleTodo.bind(this, t)}
                />
            ));
        return (
            <div>
                <header>
                    <h1>Todo List</h1>
                    <h2>A simple todo list app built with node</h2>
                </header>
                <section className="form">
                    <TodoForm
                        addTodo = {this.addTodo}
                    />
                </section>
                <ul className="list">
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;