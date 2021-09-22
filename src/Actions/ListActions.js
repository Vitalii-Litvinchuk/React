export const getAllList = (list) => {
    return {
        type: "LISTLOADER",
        payload: list
    }
}

export const onChangeStatus = (Id) => {
    return {
        type: "CHANGESTATUS",
        Id: Id
    }
}

// onClickDelete = (Id) => {
//     let index = this.state.ContactList.findIndex(e => e.Id === Id);
//     let partTempListOne = this.state.ContactList.slice(0, index);
//     let partTempListTwo = this.state.ContactList.slice(index + 1);
//     let tempList = [...partTempListOne, ...partTempListTwo]

//     this.setState({
//         ContactList: tempList
//     })
//     this.apiService.updateDatabse(tempList);
// }

export const onAddNewContact = (newContact) => {
    const { Name, Phone, Email, Status, Gender, Image } = newContact;
    console.log(newContact);
    const contact =
    {
        Name,
        Phone,
        Email,
        Status,
        Gender,
        Image
    }
    return {
        type: "ADDNEWCONTACT",
        newContact: contact
    }
}

// onClickEdit = (Id) => {
//     let contact = this.state.ContactList.find((i) => i.Id === Id);
//     this.setState({
//         CurrentContact: contact
//     });
// }

// onEditContact = (editedContact) => {
//     let tempList = this.state.ContactList.slice();
//     const index = tempList.findIndex(i => i.Id === editedContact.Id);

//     tempList[index] = editedContact;
//     this.setState({
//         ContactList: tempList
//     })
//     this.apiService.updateDatabse(tempList);
// }

// onChangeSearch = (e) => {
//     const someString = e.target.value.toLowerCase();
//     this.setState({
//         SearchValue: someString
//     });
// }
