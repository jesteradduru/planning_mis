import React from 'react';
import { Container } from 'reactstrap';
import List from '../FormInputs/List';
import Select from '../FormInputs/Select';

const ViewForms = ({classNames=""}) => {
    return (
        <div className={classNames}>
            <h1>View Forms</h1>
            <Container fluid>
                <Select id="selectForm" label="Filter Forms:" classNames="form-group w-25">
                    <List name="BP201" value="BP201"/>
                </Select>
                <hr className="bg-warning" />
            </Container>
        </div>
    )
}

export default ViewForms;