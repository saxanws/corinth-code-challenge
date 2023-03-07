
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/profile-card/ProfileCard";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import './home.scss';
import lifeWay from '../assets/LifeWaylogo.png';
import searchIcon from '../assets/icons/search-icon.png';
import { baseURL } from "../config/apis/aws-backend-url";

const Home = () => {
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`${baseURL}/starwars/people`).then(response => {
            console.log(response);
            setPeople(response.data.slice(3, 7))
        })
    }, [])

    return (
        <div className="home-page-wrap">
            <div className="home-page-cover">
                <div className="home-page-content">
                    <div className="home-header-section">
                        <h1>Star Wars Directory</h1>
                        <img src={lifeWay} />
                    </div>
                    <div className="middle-content">
                    {people.length !== 0 ? (<FeatureCharacterRender people={people} />) : (<div style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}>Loading <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i></div>)}
                    </div>
                    <div className="btn-wrap">
                        <div className="btn-search" onClick={() => navigate("/search")}>
                            <span>Search For Character</span>
                            <img src={searchIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
    This Function will render the characters card
*/
const FeatureCharacterRender = ({ people }) => {

    return (
        <>

            <div className="card-list-featured">
                {people.map((person, index) => {
                    return <ProfileCard key={index} person={person} />
                })}
            </div>

        </>
    )
}

export default Home;