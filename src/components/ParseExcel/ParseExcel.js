import React from "react";
import { Button, Spinner, Row, Col } from "reactstrap";
import * as XLSX from 'xlsx';
import Select from "../FormInputs/Select";
import List from "../FormInputs/List";
import Input from "../FormInputs/Input";
import HtmlTable from "../Table/HtmlTable"

class ParseExcel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gridContainer: {
                isLoading: false,
                htmlData: ""
            }
        }
    }
    onSelectFile = (f) => {
        if(typeof f === "object"){
            this.setState({gridContainer: {isLoading: true} });
            const reader = new FileReader();
            reader.onload = (evt) => { // evt = on_file_select event
                /* Parse data */
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, {type:'binary'});
                /* Get first worksheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_html(ws);
                const sampdata = XLSX.utils.sheet_to_json(ws);
                console.log(sampdata)
                /* Update state */
                this.setState({gridContainer: {htmlData: data, isLoading: false} });
            };
            reader.readAsBinaryString(f);
        }else{
            alert("select file!")
        }
      }
    render() {
        const {isLoading, htmlData} = this.state.gridContainer;
        return (
            
            <>
                <h1>Submit Form</h1>
                <Row>
                    <Col>
                        <Select id="selectForm" label="Select Form:" classNames="form-group">
                            <List name="BP201" value="BP201"/>
                        </Select>
                    </Col>
                    <Col>
                        <Input type="file" inputName="Form:" id="form" />
                    </Col>
                </Row>
              
                
                <hr className="bg-warning"/>
                <div>
                    <Button color="success" onClick={() => {
                        const file = document.getElementById("form");
                        this.onSelectFile(file.files[0])
                    }}>Submit</Button>
                </div>
                <br/>   
                <div id="grid-container" style={{height: "70vh", overflow: "scroll"}}>
                    {isLoading 
                    ? 
                    <div className="text-center">
                        <h6>Loading</h6>
                        <Spinner color="primary" />
                    </div>
                    : 
                    <HtmlTable htmldata={htmlData} /> }
                </div>
            </>
        )
    }
}
    


export default ParseExcel