import React, { useState } from 'react';
import pic from "../images/fawad1.jpg"
import p1 from "../images/fawad2.jpg"
import p2 from "../images/fawad3.jpg"
import p3 from "../images/fawad4.jpg"
import p4 from "../images/imran1.jpg"
import p5 from "../images/imran2.jpg"
import p6 from "../images/imran3.jpg"
import p7 from "../images/imrankhan1.jpg"
import p8 from "../images/imrankhan3.jpg"
import p9 from "../images/fawad1.jpg"
import p10 from "../images/fawad3.jpg"



const ChatBar = (props) => {
    const [state, setState] = useState([
        { id: 1, image: p1, name: "Fawad Khan" },
        { id: 2, image: p2, name: "Aasad Khan" },
        { id: 3, image: p3, name: "Kamran Khan" },
        { id: 4, image: p4, name: "Javed Khan" },
        { id: 5, image: p5, name: "Fazal Khan" },
        { id: 6, image: p6, name: "Rahim Khan" },
        { id: 7, image: p7, name: "Imran Khan" },
        { id: 8, image: p8, name: "Saeed Khan" },
        { id: 9, image: p9, name: "Bilal Khan" },
        { id: 10, image: p10, name: "Umer Khan" },
        
    ]);
    const openChat = user =>{
        props.openChat(user)
    }
    return (
        <div className="chatbar">
            {
                state.map((data) => (
                    <div className="chatbar__list" key={data.id} onClick={()=>openChat()}>
                        <div className="chatbar__list__img">
                            <img src={data.image} alt="" />
                            <span className="online"></span>
                        </div>
                        <div className="chatbar__list__name">
                           {data.name}
                </div>
                    </div>

                ))
            }


        </div>
    );
};

export default ChatBar;