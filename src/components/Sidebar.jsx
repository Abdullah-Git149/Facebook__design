import React, { useState } from 'react';
import pic1 from "../images/fawad1.jpg"
import pic2 from "../images/fawad2.jpg"
import pic3 from "../images/fawad3.jpg"
import pic4 from "../images/fawad4.jpg"
import pic5 from "../images/imran1.jpg"
import pic6 from "../images/imran2.jpg"

const Sidebar = () => {
    const [state, setState] = useState([
        { id: 1, image: pic1, name: "Flutter Development" },
        { id: 2, image: pic2, name: "PHP Development" },
        { id: 3, image: pic3, name: "React Native Development" },
        { id: 4, image: pic4, name: "Node JS Development" },
        { id: 5, image: pic5, name: "Vue JS Development" },
        { id: 6, image: pic6, name: "React Development" },
    ]);
    return (
        <div className="sidebar">

                {
                    state.map((data) => (
                        <div id={data.id} className="sidebar__list">
                            <div className="sidebar__list__img">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="sidebar__list__name">
                                {data.name}
                            </div>
                        </div>
                    ))
                }
               

        

        </div>
    );
};

export default Sidebar;