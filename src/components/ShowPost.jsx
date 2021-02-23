import React, { useState } from 'react';
import { FaRegCommentAlt, FaRegShareSquare, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';
import pic10 from "../images/fawad1.jpg"
import pic20 from "../images/pakistan.jpg"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"
import pic6 from "../images/pic6.jpg"
import pic7 from "../images/pic7.jpg"

const ShowPost = () => {
    const [state] = useState([{
        id: 1,
        img: pic1,
        text: "Let’s work for the weekend boyz.",
        name: "David Alaba"

    },
    {
        id: 2,
        img: pic2,
        text: "Congratulating Maulana Tariq Jamil in advance!",
        name: "Metronome"

    },
    {
        id: 3,
        img: pic3,
        text: "Cristiano Ronaldo & Leo Messi deserve our respect for everything they have done so far. ❤️",
        name: "Real Madrid : Ruling Clubs Since 1902"

    },
    {
        id: 4,
        img: pic4,
        text: "We have to do it without him.",
        name: "A s t h e t i c S o u l s"

    },
    {
        id: 5,
        img: pic5,
        text: "Haaland & Mbappe Still Have A Long Way To Go..",
        name: "Trolling Football"

    },
    {
        id: 6,
        img: pic6,
        text: "InshaAllah ❤️",
        name: "Aliâ Khân"

    },
    {
        id: 7,
        img: pic7,
        text: "Do you have what it takes to solve 60 minute real life escape game? Pakistan's first escape room game!",
        name: "Escapistan"

    },

    ])
    return (
        <div className="showpost">
            {
                state.map((data) => (
                    <div className="margin" key={data.id}>
                        <div className="showpost__header">
                            <div className="showpost__header__img">
                                <img src={pic10} alt="" />
                            </div>
                            <div className="showpost__header__name">
                                {data.name}
                                <div className="date">
                                    21h
                           </div>
                            </div>
                        </div>
                        <div className="showpost__footer">
                            <div className="showpost__data">
                                {data.text}
                            </div>
                            <div className="showpost__img">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="show__reaction">
                                <span className="show__icon">
                                    <FaRegThumbsUp />
                                    <div className="text">1 Like</div>
                                </span>

                                <span className="show__icon">
                                    <FaRegCommentAlt />
                                    <div className="text">3 Comment</div>
                                </span>

                                <span className="show__icon">
                                    <FaShareAlt />
                                    <div className="text">5 Share</div>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* <div className="showpost__header">
                <div className="showpost__header__img">
                    <img src={pic10} alt="" />
                </div>
                <div className="showpost__header__name">
                    Fawad Khan
                  <div className="date">
                        21h
                  </div>
                </div>
            </div>
            <div className="showpost__footer">
                <div className="showpost__data">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="showpost__img">
                    <img src={pic20} alt="" />
                </div>
                <div className="show__reaction">
                    <span className="show__icon">
                        <FaRegThumbsUp />
                        <div className="text">1 Like</div>
                    </span>

                    <span className="show__icon">
                        <FaRegCommentAlt />
                        <div className="text">3 Comment</div>
                    </span>

                    <span className="show__icon">
                        <FaShareAlt />
                        <div className="text">5 Share</div>
                    </span>
                </div>
            </div> */}

        </div>
    );
};

export default ShowPost;