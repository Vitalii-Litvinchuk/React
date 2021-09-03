const ContactItem = () => {
    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                </div>
                <div>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="image" className="avatar" /> Alexander Verdnam
                </div>
                <div className="lab lab-warning">Friends</div>
            </div>
            <div className="field phone">
                +1-800-600-9898
            </div>
            <div className="field email">
                example@gmail.com
            </div>
        </div>
    )
}

export default ContactItem