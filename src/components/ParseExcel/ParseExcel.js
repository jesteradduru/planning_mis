import React from "react";
import { Button, Spinner, Row, Col } from "reactstrap";
import Select from "../FormInputs/Select";
import List from "../FormInputs/List";
import Input from "../FormInputs/Input";

class ParseExcel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            excelToUpload: null,
            folderId: "1pWM3FP1SWk-ibxvrKjX8Edv0_Gx3VDA2",
            isLoading: false
        }
    }
    onChangeFile = (e) => {
        this.setState({excelToUpload: e.target.files[0]})
    }

    onSelectFormType = (e) => {
        this.setState({folderId: e.target.value})
    }

    onSubmitFile = () => {
        this.setState({isLoading: true})
        const formData = new FormData();
        formData.append("excel", this.state.excelToUpload);
        formData.append("folderId", this.state.folderId);

        fetch("http://localhost:3001/submitForm", {
            method: "post",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data !== "error"){
                alert("Form submitted!")
                console.log(data)
                this.setState({isLoading: false});
            }else{
                alert("something went wrong");
                this.setState({isLoading: false});
            }
        })
        .catch(err => {
            alert("something went wrong");
            this.setState({isLoading: false});
        })
    }

    render() {
        const {isLoading} = this.state;
        return (
            
            <>
                <h1>Submit Form</h1>
                <Row>
                    <Col>
                        <Select id="selectForm" label="Select Form:" classNames="form-group" onChange={this.onSelectFormType}>
                            <List name="BP201" value="1pWM3FP1SWk-ibxvrKjX8Edv0_Gx3VDA2" />
                        </Select>
                    </Col>
                    <Col>
                        <Input type="file" inputName="Form:" id="form" onChange={this.onChangeFile} />
                    </Col>
                </Row>
              
                
                <hr className="bg-warning"/>
                <div>
                    <Button color="success" onClick={this.onSubmitFile}>Submit</Button>
                    {isLoading ? <><span className="ml-3">Submitting</span><Spinner color="primary" /></> : null }
                </div>
                <br/> 
            </>
        )
    }
}
    


export default ParseExcel