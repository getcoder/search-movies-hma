import React from 'react';

function Popup ({ text, closePopup }) {
        return (
            <div className="popup" onClick={closePopup}>
                <div className="popup_inner" >
                    <h1>{text}</h1>
                    {/* <button onClick={closePopup} >close me</button> */}
                </div>
            </div>
        )
    }

export default Popup;