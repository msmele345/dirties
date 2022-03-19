import React from "react";
import {render, screen} from "@testing-library/react"
import SimpleForm from "./SimpleForm";
import userEvent from "@testing-library/user-event";

describe('<SimpleForm>', function () {
    it('should render a text input with Your name label', function () {

        render(<SimpleForm labelText={'Your Name'}/>);

        let label = screen.getByLabelText('Your Name');
        let button = screen.getByRole('button');

        expect(label).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should render a validation error if whitespace is left on input', function () {

        render(<SimpleForm labelText={'Your Name'}/>);

        let nameTextBox = screen.getByRole('textbox', {name: /Your Name/i});
        let button = screen.getByRole('button');

        userEvent.clear(nameTextBox);

        userEvent.click(button);

        expect(screen.getByText('Please Enter A Valid Name')).toBeInTheDocument();
    });

    it('should render an email field', function () {

        render(<SimpleForm labelText={'Your Name'}/>);

        let emailTextBox = screen.getByRole('textbox', {name: /email/i});
        let nameTextBox = screen.getByRole('textbox', {name: /Your Name/i});

        let button = screen.getByRole('button');

        expect(emailTextBox).toBeInTheDocument();

        // userEvent.clear(emailTextBox);

        // userEvent.type(nameTextBox, 'bob');
        userEvent.type(emailTextBox, 'bob');

        userEvent.click(nameTextBox);

        userEvent.click(button);

        expect(button).toBeDisabled();

        // expect(screen.getByText('Please Enter A Valid Email')).toBeInTheDocument();
    });
});
