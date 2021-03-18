import React from 'react';

const Select = ({classNames, id, children, label}) => {
    return (
        <div className={classNames}>
            <label htmlFor={id}>{label}</label>
            <select className="form-control" id={id}>
                {children}
            </select>
        </div>
    )
}

export default Select;