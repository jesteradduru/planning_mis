import React from 'react';
import { Container } from 'reactstrap';
import List from '../FormInputs/List';
import Select from '../FormInputs/Select';
import { Table , Spinner, Button} from 'reactstrap';
import { connect } from "react-redux";
import { getForms, generateReport } from "./actions";

const mapStateToProps = (state) => ({
    forms: state.getForms.forms,
    isPending: state.getForms.isPending,
    errorMsg: state.getForms.errorMsg,
    username: state.signIn.user[0].username,
    reportLoading: state.generateReport.isLoading,
    reportId: state.generateReport.reportId
});

const mapDispatchToProps = (dispatch) => ({
    onGetForms: (username) => dispatch(getForms(username)),
    onGenerateReport: (corn, livestock) => dispatch(generateReport(corn, livestock))
});

class View extends React.Component {
    componentDidMount (){
        this.props.onGetForms(this.props.username);
    }

    render () {
        const { forms, isPending, onGenerateReport, reportLoading, reportId, username} = this.props;
        const files = forms.map(file => {
            const createdTime = new Date(file.createdTime);
            return (
                <tr key={file.id}>
                    <td>{file.name}</td>
                    <td>{createdTime.toLocaleString('en-US', {month: "long", day: 'numeric', hour: 'numeric', year: "numeric", hour12: true, minute: "numeric" })}</td>
                    <td><a href={file.link} target="_blank" rel="noreferrer" className="btn btn-success">View</a></td>
                </tr>
            );
        });
        
        return (
            <div className="mt-5">
                <div className="d-flex justify-content-between">
                    <h1>View Forms</h1>
                    <div>
                        {username === "admin"? <Button color="primary" onClick={() => onGenerateReport( forms[0].id, forms[1].id )}>Generate Report</Button> :null}
                    </div>
                </div>
                <Container fluid>
                    <hr className="bg-warning" />
                    {/* <Select id="selectForm" label="Filter By:" classNames="form-group w-25">
                        <List name="BP201" value="1U-_uz3MSu2D3YZy2zYa1tI7ItQ4OCIaH" />
                        <List name="BP202" value="1WxFqAiNeSGdsZrK3tCQUeXyxDo3t8gJF" />
                    </Select> */}
                    <Table hover>
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>FILENAME</th>
                                <th>DATE UPLOADED</th>
                                <th>LINK</th>
                            </tr>
                        </thead>
                        <tbody>
                           {files}
                        </tbody>
                    </Table>
                    {isPending ? <div className="d-flex flex-column align-items-center p-3"><span className="lead">Loading</span><Spinner color="primary" /></div> :null }
                    {reportLoading ? <div className="d-flex flex-column align-items-center p-3"><span className="lead">Generating Report</span><Spinner color="primary" /></div> : null }
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);