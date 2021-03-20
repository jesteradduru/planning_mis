import React from 'react';
import { Container } from 'reactstrap';
import List from '../FormInputs/List';
import Select from '../FormInputs/Select';
import { Table , Spinner} from 'reactstrap';

class ViewForms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            forms: [],
            isLoading: true
        }
    }
    componentDidMount (){
        fetch("http://localhost:3001/listFile")
        .then(res => res.json())
        .then(data => this.setState({forms:data, isLoading: false}))
        .catch(console.log)
    }
    render () {
        // console.log(this.state.forms)
        const {classNames} = this.props;
        const  {isLoading, forms} = this.state
        const files = forms.map(file => {
            return (
                <tr>
                    <td>{file.name}</td>
                    <td><a href={file.link} target="_blank" rel="noreferrer" className="btn btn-success">View</a></td>
                </tr>
            )
        })
        return (
            <div className={classNames}>
                <h1>View Forms</h1>
                <Container fluid>
                    <Select id="selectForm" label="Filter Forms:" classNames="form-group w-25">
                        <List name="BP201" value="BP201"/>
                    </Select>
                    <hr className="bg-warning" />
                    <Table hover>
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>FILENAME</th>
                                <th>LINK</th>
                            </tr>
                        </thead>
                        <tbody>
                           {files}
                        </tbody>
                    </Table>
                    {isLoading ? <div className="d-flex flex-column align-items-center p-3 shadow bg-light"><span className="lead">Loading</span><Spinner color="primary" /></div> :null }
                </Container>
            </div>
        )
    }
}

export default ViewForms;