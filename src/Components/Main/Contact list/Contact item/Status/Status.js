
const GetStatus = ({ Status, onChangeStatus }) => {
    switch (Status) {
        case "Friend":
            return (
                <div className="lab lab-warning rounded-pill" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Work":
            return (
                <div className="lab lab-success rounded-pill" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Private":
            return (
                <div className="lab lab-danger rounded-pill" onClick={onChangeStatus}>
                    {Status}
                </div>);
        case "Family":
            return (
                <div className="lab lab-primary rounded-pill" onClick={onChangeStatus}>
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