import React from "react";
import { useNavigate } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa"

import './detail-card.scss'

const DetailCard = ({ person }) => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(-1);
    }

    return (
        <div className="detail-card">
            <div className="detail-card-header">
                <FaArrowLeft className="back-btn" onClick={() => navigateTo()}/> 
            </div>
            <div className="detail-card-content">
                <ContentDisplay person={person} />
            </div>
        </div>
    )
}

const SpecieRender = ({ specie }) => {
    return (
        <div>
            <div className="info-text">Name: {specie.name}</div>
            <div className="info-text">Average Height: {specie.average_height} cm</div>
            <div className="info-text">Language: {specie.language}</div>
            <div className="info-text">Life Span: {specie.average_lifespan} Years</div>
        </div>
    )
}

const FilmsRender = ({ film }) => {
    let filmPic = require(`../../assets/movies/${film.id}.jpg`);
    return (
        <div className="film">
            <img src={filmPic} style={{ height: "121px", width: "79px", borderRadius: "10px" }} />
            <div className="movie-title">{film.title}</div>
        </div>
    )
}

const ShipRender = ({ ship }) => {
    let shipPic = require(`../../assets/ships/${ship.id}.png`);

    return (
        <div className="starship-info-detail">
            <img src={shipPic} style={{ height: "50px", width: "60px" }} />
            <div>{ship.name}</div>
        </div>
    )
}

const ContentDisplay = ({person}) => {
    const { name, birth_year, eye_color, gender, hair_color, height, mass, starships, species, films, id } = person;
    let profilePic = require(`../../assets/people/${id}.png`);
    return(
        <>
        <div className="detail-card-content-left">
                    <img src={profilePic} />
                    <h2>{person.name}</h2>
                </div>
                <div className="detail-card-content-right">
                    <div className="section-normal">
                        <div className="section-normal-title">
                            <h4>About</h4>
                        </div>
                        <div>
                            <div className="info-text">Date of Birth: {birth_year}</div>
                            <div className="info-text">Eyes Color: {eye_color}</div>
                            <div className="info-text">Hair Color: {hair_color}</div>
                            <div className="info-text">Height: {height} cm</div>
                            <div className="info-text">Weigth: {mass} lb</div>
                        </div>
                    </div>
                    <div className="section-normal">
                        <div className="section-normal-title">
                            <h4>Species</h4>
                        </div>
                        {species ? <SpecieRender specie={species} /> : "No Specie!"}
                    </div>
                    <div className="section-normal">
                        <div className="section-normal-title">
                            <h4>Films</h4>
                        </div>
                        <div className="films-section">
                            {films.map((el, index) => {
                                return <FilmsRender key={index} film={el} />
                            })}
                        </div>
                    </div>
                    <div className="setion-starships">
                        <div>
                            <h4>StarShips</h4>
                        </div>
                        <div className="starship-info">
                            {/* <div className="starship-info-detail">
                                <img src={starshipPic} style={{ height: "70px", width: "80px" }} />
                                <div>Title</div>
                            </div> */}
                            {starships.map(el => <ShipRender ship={el} key={el.id}/>)}
                        </div>
                    </div>
                </div>
        </>
    )
}


export default DetailCard;