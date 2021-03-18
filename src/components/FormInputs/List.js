import React from 'react';

const List = ({name, val}) => {
    return (
        <option value={val}>{name}</option>
    )
}

export default List;