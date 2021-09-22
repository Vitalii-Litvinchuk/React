export const onGetName = (e) => {
    return {
        type: "GETNAME",
        value: e.target.value
    }
}

export const onGetPhone = (e) => {
    return {
        type: "GETPHONE",
        value: e.target.value
    }
}

export const onGetEmail = (e) => {
    return {
        type: "GETEMAIL",
        value: e.target.value
    }
}

export const onGetStatus = (e) => {
    return {
        type: "GETSTATUS",
        value: e.target.value
    }
}

export const onGetGender = (e) => {
    return {
        type: "GETGENDER",
        value: e.target.value
    }
}

export const onGetImage = (e) => {
    return {
        type: "GETIMAGE",
        value: e.target.value
    }
}

export const ChangeCreated = () =>{
    return {
        type: "CHANGECREATEDANDREDIRECT"
    }
}

export const onSubmit = (e) => {
    console.log("Submit");
    return {
        type: "SUBMIT",
    }
}