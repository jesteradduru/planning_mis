import React from "react";
import parse from 'html-react-parser';
import "./style.css";
const HtmlTable = ({htmldata}) => {
    return (
        <>
            {htmldata ? parse(htmldata) : null}
        </>
    )
}
export default HtmlTable;