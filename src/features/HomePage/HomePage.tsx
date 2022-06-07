import React, {FC, useCallback, useEffect} from "react";
import {getPotties} from "../../api/Api";
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

    //react ensures its the same function every time instead of a new one being created every time this component renders.
    const allCapsTitle = useCallback((): string => { //if passing a func to a child component like a button - this can be used so that props never change
        return title && title.toUpperCase();
    }, []);

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