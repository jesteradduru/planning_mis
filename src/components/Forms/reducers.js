import {
    GET_FORMS_SUCCESS, GET_FORMS_PENDING, GET_FORMS_FAILED,
    SUBMIT_FORM_FAILED, SUBMIT_FORM_PENDING, SUBMIT_FORM_SUCCESS,
    SELECT_FORM_TYPE, CHOOSE_FILE, SET_FORM_NAME, SET_FILE_ID, FILTER_BY_FOLDER,
    GEN_REPORT_FAILED, GEN_REPORT_PENDING,GEN_REPORT_SUCCESS
} from "./constants";

const initStateform = {
    forms: [],
    isPending: false,
    errorMsg: "",
    filterByFolder: "1U-_uz3MSu2D3YZy2zYa1tI7ItQ4OCIaH"
}


export const getForms = (state = initStateform, action = {}) => {
    switch (action.type) {
        case GET_FORMS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case GET_FORMS_SUCCESS:
            return Object.assign({}, state, {   forms: action.payload, isPending: false });
        case GET_FORMS_FAILED:
            return Object.assign({}, state,  {  errorMsg: action.payload });
        case FILTER_BY_FOLDER:
            return Object.assign({}, state, { filterByFolder: action.payload });
        default:
            return state;
    }
}

const initStateSubmitForm = {
    excelToUpload: null,
    folderId: "1U-_uz3MSu2D3YZy2zYa1tI7ItQ4OCIaH",
    isLoading: false,
    formName: "",
    errorMsg: "",
    fileId: ""
}

export const submitForm = (state = initStateSubmitForm, action = {}) => {
    switch (action.type) {
        case SELECT_FORM_TYPE:
            return Object.assign({}, state, { folderId: action.payload });
        case CHOOSE_FILE:
            return Object.assign({}, state, { excelToUpload: action.payload });
        case SET_FORM_NAME:
            return Object.assign({}, state, { formName: action.payload });
        case SET_FILE_ID:
            return Object.assign({}, state, { fileId: action.payload });
        case SUBMIT_FORM_PENDING:
            return Object.assign({}, state, { isLoading: true });
        case SUBMIT_FORM_SUCCESS:
            return Object.assign({}, state, {   fileId: action.payload, isLoading: false });
        case SUBMIT_FORM_FAILED:
            return Object.assign({}, state,  {  errorMsg: action.payload });
        default:
            return state;
    }
}

const initGenReportState = {
    reportId: "",
    isLoading: false,
    errorMsg: ""
}
export const generateReport = (state = initGenReportState, action = {}) => {
    switch (action.type) {
        case GEN_REPORT_PENDING:
            return Object.assign({}, state, { isLoading: true });
        case GEN_REPORT_SUCCESS:
            return Object.assign({}, state, {   reportId: action.payload, isLoading: false });
        case GET_FORMS_FAILED:
            return Object.assign({}, state,  {  errorMsg: action.payload });
        default:
            return state;
    }
}