import React from "react";
import { Button, Spinner,Container } from "reactstrap";
import Select from "../FormInputs/Select";
import List from "../FormInputs/List";
import Input from "../FormInputs/Input";
import {connect} from "react-redux";
import {selectFormType, chooseFile, submitForm, setFormName } from "./actions"

const mapStateToProps = (state) => ({
    excelToUpload: state.submitForm.excelToUpload,
    folderId: state.submitForm.folderId,
    isLoading: state.submitForm.isLoading,
    formName: state.submitForm.formName,
    errorMsg: state.submitForm.errorMsg,
    fileId: state.submitForm.fileId,
    username: state.signIn.user[0].username
})

const mapDispatchToProps = (dispatch) => ({
    onChangeFile: (e) => dispatch(chooseFile(e)),
    onSelectFormType: (e) => dispatch(selectFormType(e)),
    onSetFormName: (e) => dispatch(setFormName(e)),
    onSubmitFile: (folderId, formName, file, username) => dispatch(submitForm(folderId, formName, file, username)),
})

const Submit = ({onSetFormName, onSelectFormType, onChangeFile, onSubmitFile, isLoading, folderId, excelToUpload, formName, username}) => {
    return (  
        <>
            <Container className="mt-5 shadow">
                <h1>Submit Form</h1>
                    <Input type="text" inputName="Form Name:" id="formName" onChange={onSetFormName}  />      
                    <Select id="selectForm" label="Form Type:" classNames="form-group" onChange={onSelectFormType}>
                        <List name="BP201" value="1U-_uz3MSu2D3YZy2zYa1tI7ItQ4OCIaH" />
                        <List name="BP202" value="1WxFqAiNeSGdsZrK3tCQUeXyxDo3t8gJF" />
                    </Select>
                    <Input type="file" inputName="Form:" id="form" onChange={onChangeFile} />                    
                <hr className="bg-warning"/>
                <div>
                    <Button color="success" onClick={() => onSubmitFile(folderId, formName, excelToUpload, username)}>Submit</Button>
                    {isLoading ? <><span className="ml-3">Submitting</span><Spinner color="primary" /></> : null }
                </div>
                <br/> 
            </Container>
        </>
    )
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Submit);