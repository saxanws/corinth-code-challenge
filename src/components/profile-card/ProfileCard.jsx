import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './profile-card.scss';

// import profilePic from '../../assets/people/1.png';
import eyeIcon from '../../assets/icons/eye-icon.png';
import weightIcon from '../../assets/icons/weight-icon.png';
import heightIcon from '../../assets/icons/height-icon.png';
import hairIcon from '../../assets/icons/hair-icon.png';
import arrowIcon from '../../assets/icons/arrow-navigate-right.png';



const ProfileCard = ({person}) => {
    const {name, eye_color, birth_year, gender, hair_color, height, mass, id} = person;
    let profilePic = require (`../../assets/people/${id}.png`);
    const navigate = useNavigate()

    const navigateTo = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-image" style={{ backgroundImage: `url(${profilePic})` }} />
            <div className="profile-card-info">
                <h5>{gender}</h5>
                <h4>{person.name}</h4>
                <div className="profile-card-subtitle">
                    DOB: {birth_year}
                </div>

                <div className="about-section">
                    <div className="about-section-title">
                        <span>About</span> <hr className="line" />
                    </div>
                    <div className="about-section-info">
                        <div className="info-icon">
                            <img src={eyeIcon} />
                            <div>{eye_color}</div>
                        </div>
                        <div className="info-icon">
                            <img src={weightIcon} />
                            <div>{mass} lb</div>
                        </div>
                        <div className="info-icon">
                            <img src={heightIcon} />
                            <div>{height} cm</div>
                        </div>
                        <div className="info-icon">
                            <img src={hairIcon} />
                            <div>{hair_color}</div>
                        </div>
                    </div>
                </div>

                <div className="btn-info">
                    <div className="more-info-btn" onClick={() => navigateTo(person.id)}>
                        <span>More Info</span>
                        <img src={arrowIcon} />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProfileCard;