import React from 'react';

const Input = ({type, inputName, id, name=""}) => {
    return (
       <div className="form-group">
           <label htmlFor={id}>{inputName}</label>
            <input type={type} name={name} id={id} className="form-control"/>
       </div>
    )
}

export default Input;