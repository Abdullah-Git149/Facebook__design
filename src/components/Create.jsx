import React from 'react';
import pic1 from "../images/fawad1.jpg"
import { FaRegFileImage, FaRegGrinAlt, FaVideo } from "react-icons/fa"

const Create = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__first__img">
                    <span>   <img src={pic1} alt="" /></span>

                </div>
                <div className="create__first__text">
                    <input type="text" className="create__first__input"
                        placeholder="What's on your mind?" />
                </div>
            </div>


            <div className="create__second">
                <span className="create__second__icon">
                    <FaVideo className="second__icon red"/>
               <div>Live Video</div>
                </span>

                <span className="create__second__icon ">
                    <FaRegFileImage className="second__icon green"/>
                    <div>Photo / Video</div>
                </span>

                <span className="create__second__icon">
                    <FaRegGrinAlt className="second__icon yellow"/>
                    <div>Feeling</div>
                </span>
            </div>
        </div>
    );
};

export default Create;