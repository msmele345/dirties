import {fetchTodos} from "./Api";
import axios from "axios";
import {cleanup} from "@testing-library/react";

jest.mock('axios');
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
            .toHaveBeenCalledWith('https://https://jsonplaceholder.typicode.com/todos');
    });
});