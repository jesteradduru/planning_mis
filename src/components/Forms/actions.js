import {
    GET_FORMS_SUCCESS, GET_FORMS_PENDING, GET_FORMS_FAILED,
    SUBMIT_FORM_FAILED, SUBMIT_FORM_PENDING, SUBMIT_FORM_SUCCESS,
    SELECT_FORM_TYPE, CHOOSE_FILE, SET_FORM_NAME, SET_FILE_ID, FILTER_BY_FOLDER,
    GEN_REPORT_FAILED, GEN_REPORT_SUCCESS, GEN_REPORT_PENDING
} from "./constants";


// GET FORMS ACTION
export const getForms = (username) => dispatch => {
    dispatch({ type: GET_FORMS_PENDING })
    fetch(`http://localhost:3001/listFile/${username.toUpperCase()}`)
    .then(res => res.json())
    .then(data => {
        dispatch({ type: GET_FORMS_SUCCESS, payload: data })
    })
    .catch(error =>  dispatch({ type: GET_FORMS_FAILED, payload: error }))
}

export const filterBy = (folderId) => ({
    type: FILTER_BY_FOLDER,
    payload: folderId
})

// SUBMIT FORM ACTIONS
export const selectFormType = (e) => ({
    type: SELECT_FORM_TYPE,
    payload: e.target.value
});

export const chooseFile = (e) => ({
    type: CHOOSE_FILE,
    payload: e.target.files[0]
});

export const setFormName = (e) => ({
    type: SET_FORM_NAME,
    payload: e.target.value
});

export const submitForm = ( folderId, formName, file, username ) => dispatch => {
    const formData = new FormData();

    formData.append("folderId", folderId);
    formData.append("excel", file);
    formData.append("formName", formName);
    formData.append("username", username.toUpperCase());
    
    dispatch({ type: SUBMIT_FORM_PENDING })

    fetch("http://localhost:3001/submitForm", {
        method: "post",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if(data !== "error"){
            alert("Form submitted!")
            console.log(data)
            dispatch({ type: SUBMIT_FORM_SUCCESS, payload: data })
            dispatch({ type: SET_FILE_ID, payload: data })
        }else{
            dispatch({ type: SUBMIT_FORM_FAILED, payload: "something went wrong" })
        }
       
    })
    .catch(error =>  dispatch({ type: SUBMIT_FORM_FAILED, payload: error }))
}


export const generateReport = ( corn, livestock ) => dispatch => {
    
    dispatch({ type:  GEN_REPORT_PENDING})
    fetch(`http://localhost:3001/generateReport/${corn}/${livestock}`)
    .then(res => res.json())
    .then(data => {
        if(data !== "error"){
            if (window.confirm('Click ok to view Report!')) 
            {
                window.open(
                    'https://docs.google.com/spreadsheets/d/1CsTYuWjhOB2vgbSnhOXeApaGSD1HwqSwpJ4ZLf4HKX4/',
                    '_blank' // <- This is what makes it open in a new window.
                );
            };
            
            console.log(data)
            dispatch({ type: GEN_REPORT_SUCCESS, payload: data })
        }else{
            dispatch({ type: GEN_REPORT_FAILED, payload: "something went wrong" })
        }
       
    })
    .catch(error =>  dispatch({ type: GEN_REPORT_FAILED, payload: error }))

}
