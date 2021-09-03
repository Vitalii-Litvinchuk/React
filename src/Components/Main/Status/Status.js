

const GetStatus = ({ Status }) => {
    if (Status === "Friend")
        return (
            <div className="lab lab-warning">
                {Status}
            </div>
        );
    else if (Status === "Work")
        return (
            <div className="lab lab-success">
                {Status}
            </div>
        );
    else if (Status === "Private")
        return (
            <div className="lab lab-danger">
                {Status}
            </div>);
    else if (Status === "Family")
        return (
            <div className="lab lab-primary">
                {Status}
            </div>);
    else return (
        < div className="lab" >
            {Status}
        </div>
        );
}

export default GetStatus