import React from "react";
import {render, screen} from "../../../test-utils/testutils"
import NewPottyForm from "./NewPottyForm";
import userEvent from "@testing-library/user-event";


describe("<NewPottyForm>", () => {

    it('should render the correct inputs', function () {

        render(<NewPottyForm/>);

        let formFields = screen.getAllByRole('textbox');
        expect(formFields.length).toEqual(3);

        expect(screen.getByLabelText('Potty Time')).toBeInTheDocument();
        expect(screen.getByLabelText('Notes')).toBeInTheDocument();
        expect(screen.getByLabelText('Potty Type')).toBeInTheDocument();
    });

    it('should show an error if fields are touched and empty', function () {

        render(<NewPottyForm/>);

        let formFields = screen.getAllByRole('textbox');

        let submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();

        userEvent.clear(formFields[0]);
        userEvent.click(formFields[0]);

        userEvent.click(submitButton);

        expect(screen.getByText("Please Enter a Valid Potty Type")).toBeInTheDocument();
    });

    it('should handle submit', function () {

        render(<NewPottyForm/>);

        let formFields = screen.getAllByRole('textbox');
        let submitButton = screen.getByRole('button');

        userEvent.clear(formFields[0]);
        userEvent.clear(formFields[1]);
        userEvent.clear(formFields[2]);

        userEvent.type(formFields[0],"wet");
        userEvent.type(formFields[1],"not bad");
        userEvent.type(formFields[2],"10-20-22");

        userEvent.click(submitButton);

        expect(screen.queryByText('"Please Enter a Valid Potty Type"')).toBeNull();
        expect(screen.queryByText('"Please Enter a Valid Potty Description"')).toBeNull();
        expect(screen.queryByText('"Please Enter a Valid Potty Time"')).toBeNull();
    });

});