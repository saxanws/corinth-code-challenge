
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

import "./search.scss"
import ProfileCard from "../components/profile-card/ProfileCard";
import { baseURL } from "../config/apis/aws-backend-url";

const Search = () => {
    const [searchName, setSearchName] = useState("");
    const [people, setPeople] =useState([]);
    const [searching, setSearching] = useState(false)


    const updateKey = async even => {
        if(even.key === "Enter") return searchPeople();
        setSearching(true)
        await setSearchName(even.target.value);
        setSearching(false)
        console.log(searchName);
    }

    const searchPeople = async() => {
        setPeople(null);
        const people = await axios.get(`${baseURL}/starwars/search/people/${searchName}`);
        console.log(searchName)
        console.log(people);
        setPeople(people.data);
    } 
    

    return (
        <div className="search-page-wrap">
            <div className="search-page-cover">
                <div className="search-page-content">
                    <div className="search-header">
                        <div className="search-header-title">Search A Character</div>
                        <div className="input-form">
                            <input onKeyUp={updateKey} />
                            <FaSearch style={{cursor:"pointer"}} onClick={searchPeople}/>
                        </div>
                    </div>
                    <div className="result-content">
                        <div className="result-qty">Results: {people ? people.length : 0}</div>
                        <div className="result-list">
                            {
                                 people ? people.map((person,index) => <ProfileCard person={person} key={person.id}/>) : (<div style={{color: "white", fontWeight:"bold", fontSize:"100px"}}>Loading <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i></div>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search;