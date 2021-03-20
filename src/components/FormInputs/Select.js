import React from 'react';

const Select = ({classNames, id, children, label, onChange}) => {
    return (
        <div className={classNames}>
            <label htmlFor={id}>{label}</label>
            <select className="form-control" id={id} onChange={onChange}>
                {children}
            </select>
        </div>
    )
}

export default Select;