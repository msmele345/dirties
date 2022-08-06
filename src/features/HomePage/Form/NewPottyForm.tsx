import React, {FC, useState} from "react";
import useInput from "../../../hooks/useInput";
import {useAppDispatch} from "../../../app/hooks/hooks";
import {Potty} from "../../PottyEvent/PottyEvent";
import {NewPottyResponse, saveNewPotty} from "../../../api/Api";
import {savePottySuccess} from "../../../actions/actions";
import styles from './NewPotty.module.css';

const NewPottyForm: FC = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const {
        enteredValue: enteredPottyType,
        hasError: pottyTypeHasError,
        valueIsValid: enteredPottyTypeIsValid,
        valueChangedHandler: pottyTypeChangedHandler,
        touchedInputHandler: pottyTypeTouchedHandler,
        resetInput: resetPottyTypeInput
    } = useInput((text: string) => text.trim() !== '');

    const {
        enteredValue: enteredPottyNotes,
        hasError: pottyNotesHaveError,
        valueIsValid: enteredPottyNotesAreValid,
        valueChangedHandler: pottyNotesChangedHandler,
        touchedInputHandler: pottyNotesTouchedHandler,
        resetInput: resetPottyNotesInput
    } = useInput((text: string) => text.trim() !== '');

    const {
        enteredValue: enteredPottyTime,
        hasError: pottyTimeHasError,
        valueIsValid: enteredPottyTimeIsValid,
        valueChangedHandler: pottyTimeChangedHandler,
        touchedInputHandler: pottyTimeTouchedHandler,
        resetInput: resetPottyTimeInput
    } = useInput((text: string) => text.trim() !== '');

    const [enteredDate, setEnteredDate] = useState<Date>(new Date());

    const typeInputClasses = pottyTypeHasError ? 'form-control invalid' : 'form-control';
    const timeInputClasses = pottyTimeHasError ? 'form-control invalid' : 'form-control';
    const notesInputClasses = pottyNotesHaveError ? 'form-control invalid' : 'form-control';

    let formIsValid = false;

    if (enteredPottyTypeIsValid && enteredPottyNotesAreValid && enteredPottyTimeIsValid) {
        formIsValid = true;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (pottyTimeHasError || pottyTypeHasError || pottyNotesHaveError) {
            return;
        }

        const newPottyPayload: Potty = {
            pottyTime: new Date(enteredPottyTime),
            type: enteredPottyType,
            description: enteredPottyNotes
        };

        const response: NewPottyResponse = await saveNewPotty(newPottyPayload);

        if (response.status === 200 && response.data) {
            dispatch(savePottySuccess(newPottyPayload))
        }
        resetPottyTypeInput();
        resetPottyNotesInput();
        resetPottyTimeInput();
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={typeInputClasses}>
                    <label htmlFor={'pottyType'}>Potty Type</label>
                    <input
                        autoFocus
                        type='text'
                        id={'pottyType'}
                        onChange={pottyTypeChangedHandler}
                        onBlur={pottyTypeTouchedHandler}
                        value={enteredPottyType}
                    />
                    {pottyTypeHasError && <p className={'error-text'}>Please Enter a Valid Potty Type</p>}
                </div>
                <div className={timeInputClasses}>
                    <label htmlFor={'pottyTime'}>Potty Time</label>
                    <input
                        type='datetime-local'
                        id={'pottyTime'}
                        onChange={pottyTimeChangedHandler}
                        onBlur={pottyTimeTouchedHandler}
                        value={enteredPottyTime}
                        name='date-picker'
                    />
                    {pottyTimeHasError && <p className={'error-text'}>Please Enter a Valid Potty Time</p>}
                </div>
                <div className={notesInputClasses}>
                    <label htmlFor={'pottyNotes'}>Notes</label>
                    <input
                        type='text'
                        id={'pottyNotes'}
                        onChange={pottyNotesChangedHandler}
                        onBlur={pottyNotesTouchedHandler}
                        value={enteredPottyNotes}
                    />
                    {pottyNotesHaveError && <p className={'error-text'}>Please Enter a Valid Potty Description</p>}
                </div>
                <div className="form-actions">
                    <button>
                        {/*// disabled={!formIsValid}*/}
                        {/*// style={{backgroundColor: !formIsValid ? 'gray' : 'MediumVioletRed'}}*/}
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
};

export default NewPottyForm;

/*
*
*            <div className={styles.datepicker}>
                <DatePicker
                    selected={enteredDate}
                    onChange={(date: Date) => setEnteredDate(date)}
                    showTimeSelect
                />
            </div>
*
* */