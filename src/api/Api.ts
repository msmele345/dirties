import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
// import {ActionTypes, FetchTodosActionType} from "../actions/actionTypes";
import {Potty} from '../features/PottyEvent/PottyEvent';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface TodoResponse {
    data?: Todo[],
    statusCode: number,
    errorMessage?: string
}

////    "start": "webpack-dev-server --config webpack.dev.js --mode development",
export const fetchTodos = (): Promise<TodoResponse> => {
    console.log("PROCESS ENV", process.env);
    return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            let todos: Todo[] = res.data.slice(0, 5).map((t: Todo) => {
                return {
                    id: t.id,
                    title: t.title,
                    completed: t.completed
                }
            })
            let todoResponse: TodoResponse = {data: todos, statusCode: res.status};
            return todoResponse;
        })
        .catch(e => {
            console.log("ERROR", e)
            let todoResponse: TodoResponse = {statusCode: e.status, errorMessage: e.message};
            return todoResponse
        });
};

export const getPotties = () => {

    const allPottiesUrl = process.env.REACT_APP_ALL_POTTIES_URL

    return axios.get<Potty[]>(`${allPottiesUrl}`)
        .then((res) => {
            console.log(">>>>>>>>>>>>> POTTY RESPONSE", res.data);
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


export interface NewPottyResponse {
    data?: Potty,
    status: number,
    errorMessage?: string
}

export const saveNewPotty = (potty: Potty): Promise<NewPottyResponse> => {
    return axios.post<Potty>('http://localhost:8080/api/v1/dirties', potty)
        .then((res: AxiosResponse<Potty>) => {
            const newPotty = {
                eventId: res.data.eventId,
                pottyTime: res.data.pottyTime,
                type: res.data.type,
                description: res.data.description
            }
            return {data: newPotty, status: res.status}
        })
        .catch(e => {
            console.error(">>>>>>>>>>>>> SAVE POTTY ERROR", e);
            return {status: e.status, errorMessage: e.message || "Something Went Wrong"}
        })
};

//thunk
// export const fetchTodosWithThunk = () => {
//     return async (dispatch: Dispatch) => {
//         const response = await axios.get<Todo[]>('https://https://jsonplaceholder.typicode.com/todos');
//
//         console.log(">>>>>>>>>>>>>", response);
//
//         dispatch<FetchTodosActionType>({
//             type: ActionTypes.fetchTodos,
//             payload: response.data
//         })
//     }
// }

