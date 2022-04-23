import React, {FC} from "react";
import {Todo} from "../../api/Api";
import {useAppSelector} from "../../app/hooks/hooks";
import {RootState} from "../../app/store";


const TodoList: FC = (): JSX.Element => {

    const todosFromStore = useAppSelector((state: RootState) => state.todos);

    return (
        <div>
            <ul>
            { todosFromStore.length > 0 &&
                todosFromStore.map((todo: Todo) => (
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.completed}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
};

export default TodoList;