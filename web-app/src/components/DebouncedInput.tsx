import {ChangeEvent, FC, InputHTMLAttributes, useEffect, useState} from "react";
import block from "bem-css-modules";

import {useDebounce} from "../hooks/useDebounce";

import s from './DebouncedInput.module.scss';

interface OwnProps {
    callback: (value:string) => void;
}

export type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const b = block(s);

export const DebouncedInput: FC<Props> = ({callback, id, placeholder, name}) => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        callback(debouncedValue);
    }, [callback, debouncedValue])

    return (
        <input
            id={id}
            name={name}
            placeholder={placeholder}
            type="text"
            value={value}
            className={b()}
            onChange={handleChange}/>
    )
}
