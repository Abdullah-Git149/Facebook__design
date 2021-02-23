import React, { useState } from 'react';
import pic1 from "../images/fawad1.jpg"
import pic2 from "../images/fawad2.jpg"
import pic3 from "../images/fawad3.jpg"
import pic4 from "../images/fawad4.jpg"
import pic5 from "../images/imran1.jpg"
import pic6 from "../images/imran2.jpg"

const Stories = () => {
    const [state, setState] = useState([
        { id: 1, image: pic1, name: "Flutter Development" },
        { id: 2, image: pic2, name: "PHP Development" },
        { id: 3, image: pic3, name: "React Native Development" },
        { id: 4, image: pic4, name: "Node JS Development" },


    ]);
    return (
        <div className="stories">
            {
                state.map((data) => (
                    <div className="stories__col">
                        <div className="stories__body" key={data.id}>
                            <img src={data.image} alt="" />
                            <div className="stories__overlay">
                                <div className="overlay__img">
                                    <img src={data.image} alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Stories;