import { CSSProperties, Dispatch, ForwardedRef, MutableRefObject, RefObject, forwardRef } from "react";

type TextAreaProperties = {
    textChanged: Dispatch<React.SetStateAction<string>>
}

const TextArea = forwardRef((props: TextAreaProperties, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const inputStyle: CSSProperties = {
        height: '30rem',
        width: '50%',
        fontSize: '24px'
    }

    return (<textarea onChange={e => props.textChanged(e.currentTarget.value)} ref={ref} style={inputStyle}></textarea>)
});

export default TextArea;