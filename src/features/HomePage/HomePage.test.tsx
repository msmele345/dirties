import React from "react";
import {render, screen} from "@testing-library/react"
import HomePage from "./HomePage";

describe('<HomePage>',  () => {
    it('render the text', function () {

        render(<HomePage title={"Milas Dirties"}/>);

        expect(screen.getByText("MILAS DIRTIES")).toBeInTheDocument();
    });
});