import React, {FC, PropsWithChildren} from "react";

export interface Potty {
    eventId?: string,
    pottyTime?: Date,
    type: string,
    description?: string,
    // onClick?: () => void
}

export type PottyEventProps = {
    pottyTime?: string,
    type: string,
    description?: string
}

const PottyEvent: FC<PottyEventProps> = (
    {
        pottyTime,
        type,
        description
    }
): JSX.Element => {

    const capitalize = (word: string): string => word[0].toUpperCase() + word.slice(1)

    return (
        <div>
            <h2>{capitalize(type)}</h2>
            Time: <span>{pottyTime}</span>
            {description && <p>Notes: {description}</p>}
        </div>
    )
};

export default PottyEvent;

/*
*
*   PottyEvent pe = PottyEvent.builder()
                .eventId("1")
                .pottyTime(LocalDateTime.now())
                .type("wet")
                .build();

*
* */