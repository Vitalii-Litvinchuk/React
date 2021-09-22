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

export const ToDefault = () =>{
    return {
        type: "TODEFAULT",
    }
}

export const onSubmit = (e) => {
    return {
        type: "SUBMIT",
    }
}