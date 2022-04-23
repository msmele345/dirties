import React, {FC} from "react";
import {useAppSelector} from "../../app/hooks/hooks";
import {RootState} from "../../app/store";
import PottyEvent, {Potty} from "./PottyEvent";


const PottyList: FC = (): JSX.Element => {

    const potties = useAppSelector((state: RootState) => state.potties);

    return (
        <div>
            <ul>
                { potties.length > 0 &&
                    potties.map((potty: Potty) => (
                        <li key={potty.eventId}>
                            <PottyEvent type={potty.type}  description={potty.description} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default PottyList;