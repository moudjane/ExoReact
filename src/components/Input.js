import React from 'react';

export const Input = ({onChanged}) => {
    const funct = (e) => {
        localStorage.setItem("futurtitle",e)
        onChanged(e)
    } 
    return (
        <div>
            <input type="text" onChange={(e)=>funct(e.target.value)} />
        </div>
    );
};

export default Input;
