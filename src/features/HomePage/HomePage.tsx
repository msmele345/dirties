import React, {FC, useEffect} from "react";
import SimpleFormWithHook from "./Form/SImpleFormWithHook";
import TodoList from "../Todo/TodoList";
import {fetchTodos, getPotties, Todo} from "../../api/Api";
import {useAppDispatch} from "../../app/hooks/hooks";
import {ActionTypes} from "../../actions/actionTypes";
import {Potty} from "../PottyEvent/PottyEvent";
import PottyList from "../PottyEvent/PottyList";
import NewPottyForm from "./Form/NewPottyForm";

interface HomeProps {
    title: string
}

const HomePage: FC<HomeProps> = ({title}): JSX.Element => {

    const dispatch = useAppDispatch();

    const allCapsTitle = (): string => {
        return title && title.toUpperCase();
    };

    useEffect(() => {
        const getPottyData = async () => {
            const response: Potty[] | void = await getPotties();
            dispatch({
                type: ActionTypes.fetchPotties,
                payload: response
            })
        };
        getPottyData();
    }, []);

    return (
        <>
            <div style={{paddingBottom: '50px'}}>
                {allCapsTitle()}
            </div>
            <div>
                <NewPottyForm/>
            </div>
            <div>
                <PottyList/>
            </div>
        </>
    )
};

export default HomePage;