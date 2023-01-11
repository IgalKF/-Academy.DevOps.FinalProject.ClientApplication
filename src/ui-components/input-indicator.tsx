import { CSSProperties, MutableRefObject, RefObject, } from "react";

type InputIndicatorProperties = {
    textToFind: string;
    inputReference: RefObject<HTMLTextAreaElement>;
}

const InputIndicator = (props: InputIndicatorProperties) => {
    const inputStyle: CSSProperties = {
        height: '5rem',
        position: 'fixed',
        top: '10rem',
        left: '10rem',
    }

    const imageStyle: CSSProperties = {
        height: '100%',
    }

    const result = () => {
        console.log(props.inputReference.current?.value);

        return (
            <div style={inputStyle}>
                <h2>Contains {props.textToFind}?</h2>
                <img style={imageStyle} alt='indicator' src={(props.inputReference.current?.value.indexOf(props.textToFind) === -1 ? 'ui/rejected.png' : 'ui/checked.png')}></img>
            </div>
        )
    }

    return result();
}

export default InputIndicator;