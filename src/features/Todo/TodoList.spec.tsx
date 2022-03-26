import React from "react";
import {render, screen} from "../../test-utils/testutils";
import {Todo} from "../../api/Api";
import TodoList from "./TodoList";

describe("<TodoList>", () => {

    const todoList: Todo[] = [
        {
            id: 1,
            title: "Clean room",
            completed: false
        },
        {
            id: 2,
            title: "Finish work",
            completed: false
        }
    ];

    it('should render a list', function () {

        render(<TodoList />, {
            initialState: {
                todos: todoList
            }
        });

        expect(screen.getByText('Clean room')).toBeInTheDocument();
        expect(screen.getByText('Finish work')).toBeInTheDocument();
    });
});