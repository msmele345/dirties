import React, {FC} from "react";
import {Potty} from "./PottyEvent";
import {render, screen} from "../../test-utils/testutils";
import PottyList from "./PottyList";

describe("<PottyList>", () => {

    const potties: Potty[] = [
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


    it('should render the list from the store', function () {

        render(<PottyList/>, {
            initialState: {
                potties: potties
            }
        });

        let pottieTypes = screen.getAllByRole('heading');
        expect(pottieTypes[0]).toHaveTextContent('wet');
        expect(pottieTypes[1]).toHaveTextContent("dirty");

        expect(screen.getByText('7:30:00 AM')).toBeInTheDocument();
        expect(screen.getByText('8:30:00 AM')).toBeInTheDocument();
    });
});