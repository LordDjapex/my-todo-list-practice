import React, { Component } from 'react'

export default class App extends Component {
    state = {
        todolist: [
            {id: Math.random(), content:'Content'},
            {id: Math.random(), content:'Nigga'},
            {id: Math.random(), content:'Content'}
        ]
    }



    addTask = (e) => {
        e.preventDefault()
        let input = document.querySelector('#inputer').value
        const id = Math.random()
        this.setState({
            todolist: [...this.state.todolist, {id: id, content: input}]
        })
    }

    deleteTask = (id) => {
        this.setState({
            todolist: this.state.todolist.filter((item) => {
                return item.id !== id
            })
        })
    }
    

    render() {
        return (
            <>
            <ul id="list">
                    {this.state.todolist.map((item) => (<li key={item.id}>{item.content} <button onClick={() => this.deleteTask(item.id)}>X</button></li> ))}
            </ul>
            <form onSubmit={(e) => this.addTask(e)}>
                <label name="content-input">Input content:</label>
                <input name="content-input" id="inputer" placeholder="input content" type="text" required></input>
                <button type="submit">submit</button>
            </form>
            </>
        )
    }
}
