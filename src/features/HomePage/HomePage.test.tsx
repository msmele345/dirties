import React from "react";
import {render, screen} from "../../test-utils/testutils";
import HomePage from "./HomePage";
import {fetchTodos, getPotties, Todo, TodoResponse} from "../../api/Api";
import {useDispatch} from "react-redux";
import {Potty} from "../PottyEvent/PottyEvent";

var mockUseDispatch = jest.fn()
jest.mock('react-redux', () => ({
    ...jest.requireActual("react-redux"),
     // useDispatch: mockUseDispatch
}));
jest.mock('../../api/Api');
const mockFetchTodos = fetchTodos as jest.MockedFunction<typeof fetchTodos>;
const mockGetPotties = getPotties as jest.MockedFunction<typeof getPotties>;
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

    const pottiesResponse: Potty[] = [
        {
            eventId: "1",
            pottyTime: new Date(2022, 1, 12, 7, 30),
            type: "wet"
        },
        {
            eventId: "2",
            pottyTime: new Date(2022, 1, 12, 8, 30),
            type: "dirty"
        }
    ];

    it('render the text', async function () {

        const response: TodoResponse = { data: todoList, statusCode: 200}

        mockFetchTodos.mockImplementationOnce(() => Promise.resolve(response));

        render(<HomePage title={"Milas Dirties"}/>);

        expect(await screen.findByText("MILAS DIRTIES")).toBeInTheDocument();
    });

    it('should call dispatch on page load', async function () {

        const response: TodoResponse = { data: todoList, statusCode: 200}

        mockFetchTodos.mockImplementationOnce(() => Promise.resolve(response));

        render(<HomePage title={"Dirities"}/>);


        let title1: HTMLElement = await screen.findByText(/finish work/i);

        expect(mockFetchTodos).toHaveBeenCalled();
        expect(title1).toBeInTheDocument();
        expect(title1.textContent).toEqual("Finish work");
        // expect(mockDispatch).toHaveBeenCalledWith({
        //     type: ActionTypes.fetchTodos,
        //     payload: todoList
        // })
    });

    it('should handle potty response', async function () {

        const response: TodoResponse = { data: todoList, statusCode: 200}

        mockFetchTodos.mockImplementationOnce(() => Promise.resolve(response));
        mockGetPotties.mockImplementationOnce(() => Promise.resolve(pottiesResponse));

        render(<HomePage title={"Milas Dirties"}/>);

        const pottyTypeHeaders = await screen.findAllByRole('heading');

        expect(mockGetPotties).toHaveBeenCalled();
        expect(pottyTypeHeaders.length).toEqual(2);
        expect(pottyTypeHeaders[0]).toHaveTextContent('wet');
        expect(pottyTypeHeaders[1]).toHaveTextContent('dirty');
    });
});