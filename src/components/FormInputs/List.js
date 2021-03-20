import React from 'react';

const List = ({name, value}) => {
    return (
        <option value={value}>{name}</option>
    )
}

export default List;