import React from "react";
import {render, screen} from "@testing-library/react"
import PottyEvent from "./PottyEvent";


describe("<PottyEvent>", () => {
    it('should render the potty', function () {
        render(<PottyEvent pottyTime={"10-1-2020"}  type={"wet"}/>);

        expect(screen.getByText('wet')).toBeInTheDocument();
    });
});