import React, {FC} from "react";
import SimpleForm from "./Form/SimpleForm";
import SimpleFormWithHook from "./Form/SImpleFormWithHook";

interface HomeProps {
    title: string
}

const HomePage: FC<HomeProps> = ({title}): JSX.Element => {

    const allCaps = (word: string): string => {
        return title && title.toUpperCase();
    }

    return (
        <>
            <div style={{paddingBottom: '50px'}}>
                {allCaps(title)}
            </div>
            <div>
                <SimpleFormWithHook/>
            </div>
        </>
    )
};

export default HomePage;