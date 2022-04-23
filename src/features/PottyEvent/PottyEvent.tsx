import React, {FC, PropsWithChildren} from "react";

export interface Potty {
    eventId: string,
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
    return (
        <section>
            <h2>{type}</h2>
            <p>
                Time:
                <span>{pottyTime}</span>
            </p>
            {description && <p>Notes: {description}</p>}
        </section>
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