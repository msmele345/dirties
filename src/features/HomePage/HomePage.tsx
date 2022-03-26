import React, {FC, useEffect} from "react";
import SimpleFormWithHook from "./Form/SImpleFormWithHook";
import TodoList from "../Todo/TodoList";
import {fetchTodos, Todo} from "../../api/Api";
import {useAppDispatch} from "../../app/hooks/hooks";
import {ActionTypes} from "../../actions/types";

interface HomeProps {
    title: string
}

const HomePage: FC<HomeProps> = ({title}): JSX.Element => {

    const allCaps = (word: string): string => {
        return title && title.toUpperCase();
    };

    const dispatch = useAppDispatch();

    useEffect(() => {
        const getData = async () => {
            const response: Todo[] | void = await fetchTodos()
            dispatch({
                type: ActionTypes.fetchTodos,
                payload: response
            }) //try the slice way
        };
        getData()
    }, []);

    return (
        <>
            <div style={{paddingBottom: '50px'}}>
                {allCaps(title)}
            </div>
            <div>
                <SimpleFormWithHook/>
            </div>
            <div>
                <TodoList/>
            </div>
        </>
    )
};

export default HomePage;