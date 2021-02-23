import React from 'react';
import pic from "../images/fawad1.jpg"
import { FaPhone, FaRegWindowClose, FaVideo } from "react-icons/fa"

const Chatbox = (props) => {
    return (
        <>
        {props.state ? (  <div className="chatbox">
                <div className="chat__header">
                    <div className="chat__first">
                        <div className="chat__header__img">
                            <img src={props.current.image ? props.current.image :""} alt="" />
                        </div>
                        <div className="chat__header__name">
                            Abdullah
                    </div>
                    </div>
                    <div className="chat__second">
                        <FaVideo className="chat__second__icon" />
                        <FaPhone className="chat__second__icon" />
                        <FaRegWindowClose className="chat__second__icon" onClick={props.closeChat}/>


                    </div>

                </div>

                <div className="chat__body">
                    <div className="chat__left">
                        <p>Hello Abdullah</p>
                    </div>
                    <div className="chat__right">
                        <p>Hello Hammad</p>

                    </div>
                    <div className="chat__left">
                        <p>Hello Abdullah</p>
                    </div>



                </div>
                <div className="chat__footer">
                    <input type="text" placeholder="Aa" className="chat__input" />
                </div>

            </div>) : ""}
          
        </>
    );
};

export default Chatbox;