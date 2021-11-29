import axios from 'axios'

const url = 'http://localhost:5000/api/todos/';
      
    
async function getTodos() {
    try {
        const response = await axios.get(url)
        return response.data
    } 
    catch (err) {
        throw new Error("Can't get todos")
    }
}

async function postTodos(todo) {
    try {
        const response = await axios.post(url, todo);
        console.log(response.data.id)
        return response.data.id
    } 
    catch (err) {
        throw new Error("Can't post todo")
    }
}

async function putTodos(todo, id) {
    try {
        await axios.put(url + id, todo);
    } 
    catch (err) {
        throw new Error("Can't put todo")
    }
}

async function deleteTodos(id) {
    try {
        await axios.delete(url + id)
    } 
    catch (err) {
        throw new Error("Can't delete todo")
    }
}

export { getTodos, postTodos, putTodos, deleteTodos }