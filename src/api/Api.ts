import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from "../actions/types";

export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}

export const fetchTodos = () => {
    return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            let todos: Todo[] = res.data.slice(0,5).map((t: Todo) => {
                return {
                    id: t.id,
                    title: t.title,
                    completed: t.completed
                }
            })
            return todos;
        })
        .catch(e => {
            console.log("ERROR", e)
            // throw new Error(e.message || "Something went wrong!")
        });
};

//thunk
export const fetchTodosWithThunk = () => {
    return async (dispatch: Dispatch) => {
        const response =  await axios.get<Todo[]>('https://https://jsonplaceholder.typicode.com/todos');

        console.log(">>>>>>>>>>>>>", response);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

//: Promise<Todo[]>