import {fetchTodos, getPotties, saveNewPotty} from "./Api";
import axios from "axios";
import {cleanup} from "@testing-library/react";
import {Potty} from "../features/PottyEvent/PottyEvent";

jest.mock('axios', () => ({
    get: jest.fn(),
    post: jest.fn()
}));
const mockedAxios = axios as jest.Mocked<typeof axios>
describe('Api', function () {
    afterEach(cleanup);
    it('should call the todos endpoint', async function () {

        mockedAxios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    userId: 2,
                    title: 'boo',
                    completed: false
                }
            ],
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        })

         await fetchTodos();

        expect(await axios.get)
            .toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
    });

    it('should call the potties endpoint', async function () {

        mockedAxios.get.mockResolvedValueOnce({
            data: [
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
            ]
        });

        await getPotties();

        expect(await axios.get)
            .toHaveBeenCalledWith('http://localhost:8080/api/v1/dirties');
    });

    it('should  save a new potty and call the correct endpoint', async function () {

        mockedAxios.post.mockResolvedValueOnce({
            data: {
                eventId: "1",
                pottyTime: new Date(2022, 1, 12, 7, 30),
                type: "wet"
            }
        });

        const newPotty: Potty = {
            eventId: "1",
            pottyTime: new Date(2022, 1, 12, 7, 30),
            type: "wet"
        };

        const newPottyRequest = {
            pottyEvent: newPotty
        };

        await saveNewPotty(newPotty);

        expect(await  axios.post).toHaveBeenCalledWith('http://localhost:8080/api/v1/dirties', newPottyRequest);
    });
});