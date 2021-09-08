// Import components
import GetStatus from "../../Status/Status";


const ContactItem = ({  Name, Email, Phone, Status, Gender, Image, onChangeStatus, onClickDelete }) => {

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
                        <GetStatus Status={Status} onChangeStatus={onChangeStatus} />
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
                        <i className="far fa-edit fa-2x"></i>
                        <i className="far fa-trash-alt fa-2x" onClick={onClickDelete}></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactItem;