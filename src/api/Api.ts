import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes, FetchTodosActionType} from "../actions/actionTypes";
import {Potty} from '../features/PottyEvent/PottyEvent';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

////    "start": "webpack-dev-server --config webpack.dev.js --mode development",
export const fetchTodos = () => {
    console.log("ENV", process.env.REACT_APP_SECRET_CODE);
    console.log("ENV URL", process.env.REACT_APP_BACKEND_URL);
    console.log("PRCESS ENV", process.env);
    return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            let todos: Todo[] = res.data.slice(0, 5).map((t: Todo) => {
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

export const getPotties = () => {
    return axios.get<Potty[]>('http://localhost:8080/api/v1/dirties')
        .then((res) => {
            console.log(">>>>>>>>>>>>> POTTY RESPONSE", res.data );
            let potties: Potty[] = res.data.map((p: Potty) => {
                return {
                    eventId: p.eventId,
                    pottyTime: p.pottyTime,
                    type: p.type,
                    description: p.description
                }
            })
            return potties;
        })
        .catch(e => {
            console.log(">>>>>>>>>>>>> POTTY ERROR", e);
        });
};

//thunk
export const fetchTodosWithThunk = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>('https://https://jsonplaceholder.typicode.com/todos');

        console.log(">>>>>>>>>>>>>", response);

        dispatch<FetchTodosActionType>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

