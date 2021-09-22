import { connect } from "react-redux"
import { Link } from "react-router-dom"

// Import components
import GetStatus from "./Status/Status"

// Import actions
import { onChangeStatus } from "../../../../Actions/ListActions"

const ContactItem = ({Id ,Name, Email, Phone, Status, Gender, Image, onChangeStatus }) => {

    //  onChangeStatus, onClickDelete, onClickEdit

    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`
    return (
        <div className="unit" >
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div className="row">
                    <div className="col-3">
                        <img src={img} alt="..." className="avatar" />
                    </div>
                    <div className="col-4">
                        {Name}
                        <GetStatus Status={Status} onChangeStatus={() => {onChangeStatus(Id)}} />
                    </div>
                </div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                <div className="row">
                    {Email}
                </div>
                <div className="row">
                    <div className="icons">
                        <Link to="/edit-contact">
                            {/* <i className="far fa-edit fa-2x" onClick={onClickEdit}></i> */}
                        </Link>
                        {/* <i className="far fa-trash-alt fa-2x" onClick={onClickDelete}></i> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = ({ ListReducer }) => {
    return ListReducer;
}

const mapDispatchToProps = {
    onChangeStatus,
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactItem);