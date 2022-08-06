import React, {FC} from "react";
import {useAppSelector} from "../../app/hooks/hooks";
import {RootState} from "../../app/store";
import PottyEvent, {Potty} from "./PottyEvent";
import styles from './PottyList.module.css';


const PottyList: FC = (): JSX.Element => {

    const potties = useAppSelector((state: RootState) => state.potties);

    const formatDate = (date?: Date): string | undefined => {
        if (!date) return undefined;
        let newDate = new Date(date);
        return newDate.toLocaleTimeString();
    }

    return (
        <div>
            <h2 className={styles.header}>Recent Potties</h2>
            <ul className={styles.potties}>
                { potties.length > 0 &&
                    potties.map((potty: Potty, index: number) => (
                        <li className={styles.item} key={index}>
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