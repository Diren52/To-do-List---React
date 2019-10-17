const APIURL = '/api/todos/';

export async function getTodos(){
    return fetch(APIURL)/* global fetch*///add proxy at package.json so this refers to :8081/api/todos
    .then(resp => {
        if (!resp.ok){
            if (resp.status >= 400 && resp.status < 500){
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }else {
                let err = {errorMessage: 'Please try again later. Server is not responding.'};
                throw err;
            }
    }
    return resp.json()
    })
}

export async function createTodo(val){
    return fetch(APIURL, {
        method: 'post',
        headers: new Headers({/*global Headers*/
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name: val})
    })/* global fetch*///add proxy at package.json so this refers to :8081/api/todos
    .then(resp => {
        if (!resp.ok){
            if (resp.status >= 400 && resp.status < 500){
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }else {
                let err = {errorMessage: 'Please try again later. Server is not responding.'};
                throw err;
            }
        }
        return resp.json()
    })    
}

export async function removeTodo(id){
    const deleteURL = APIURL + id;
    return fetch(deleteURL, {
        method: 'delete'
    })/* global fetch*///add proxy at package.json so this refers to :8081/api/todos
    .then(resp => {
        if (!resp.ok){
            if (resp.status >= 400 && resp.status < 500){
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }else {
                let err = {errorMessage: 'Please try again later. Server is not responding.'};
                throw err;
            }
        }
        return resp.json()
    })
}

export async function updateTodo(todo){
    const updateURL = APIURL + todo._id;
    return fetch(updateURL, {
        method: 'put',
        headers: new Headers({/*global Headers*/
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({completed: !todo.completed})
    })/* global fetch*///add proxy at package.json so this refers to :8081/api/todos
    .then(resp => {
        if (!resp.ok){
           if (resp.status >= 400 && resp.status < 500){
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }else {
                let err = {errorMessage: 'Please try again later. Server is not responding.'};
                throw err;
            }
        }
        return resp.json()
    })    
}