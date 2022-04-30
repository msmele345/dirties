import React, {FC} from "react";
import {useAppSelector} from "../../app/hooks/hooks";
import {RootState} from "../../app/store";
import PottyEvent, {Potty} from "./PottyEvent";


const PottyList: FC = (): JSX.Element => {

    const potties = useAppSelector((state: RootState) => state.potties);

    const formatDate = (date?: Date): string | undefined => {
        if (!date) return undefined;
        let newDate = new Date(date);
        return newDate.toLocaleTimeString();
    }

    return (
        <div>
            <h1>Recent Potties</h1>
            <ul style={{listStyle: 'none'}}>
                { potties.length > 0 &&
                    potties.map((potty: Potty) => (
                        <li key={potty.eventId}>
                            <PottyEvent
                                type={potty.type}
                                pottyTime={formatDate(potty.pottyTime)}
                                description={potty.description} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default PottyList;