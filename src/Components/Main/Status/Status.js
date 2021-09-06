
const GetStatus = ({ Status, onChangeStatus }) => {
    switch (Status) {
        case "Friend":
            return (
                <div className="lab lab-warning" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Work":
            return (
                <div className="lab lab-success" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Private":
            return (
                <div className="lab lab-danger" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Family":
            return (
                <div className="lab lab-primary" onClick={onChangeStatus}>
                    {Status}
                </div>);
        default:
            return (
                < div className="lab" >
                    {Status}
                </div>
            );
    }
}

export default GetStatus