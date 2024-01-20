import './Toggle.css';
import { ChangeEventHandler, useState } from 'react';

type ToggleProps = {
    handleChange: ChangeEventHandler
    isChecked: boolean
}

function Toggle({ handleChange, isChecked }: ToggleProps) {
    const [Light, setIsLight] = useState(false);
    const text = Light ? "Modo Claro" : "Modo Oscuro";

    const handleClick = () => {
        setIsLight(!Light)
    }

    return(
        <div className="toggle-container">
            <input 
            type="checkbox"
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked} 
            />
            <label htmlFor="check" onClick={handleClick}>{text}</label>
        </div>
    )
}
export default Toggle
