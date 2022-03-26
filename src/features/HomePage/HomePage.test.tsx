import React from "react";
import {render, screen} from "../../test-utils/testutils";
import HomePage from "./HomePage";
import {fetchTodos, Todo} from "../../api/Api";

var mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual("react-redux"),
    // useDispatch: mockDispatch
}));
jest.mock('../../api/Api');
const mockFetchTodos = fetchTodos as jest.MockedFunction<typeof fetchTodos>;
describe('<HomePage>',  () => {

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

    it('render the text', function () {

        render(<HomePage title={"Milas Dirties"}/>);

        expect(screen.getByText("MILAS DIRTIES")).toBeInTheDocument();
    });

    it('should call dispatch on page load', async function () {

        mockFetchTodos.mockImplementationOnce(() => Promise.resolve(todoList));

        render(<HomePage title={"Dirities"}/>);


        let title1: HTMLElement[] = await screen.findAllByText(/finish work/i);

        expect(mockFetchTodos).toHaveBeenCalled();
        expect(title1).toBeTruthy();
        expect(title1[0].textContent).toEqual("Finish work");
        // expect(mockDispatch).toHaveBeenCalledWith({
        //     type: ActionTypes.fetchTodos,
        //     payload: todoList
        // })
    });
});