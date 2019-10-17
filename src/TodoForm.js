import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit(){
        this.props.addTodo(this.state.inputValue);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    id="todoInput"
                    placeholder="Insert your task here..."
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    style={{display:'none'}}
                    // onClick={this.handleSubmit}
                >
                </button>
            </form>
        )
    }
}
export default TodoForm;