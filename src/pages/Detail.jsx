
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from '../components/detail-card/DetailCard';
import { baseURL } from "../config/apis/aws-backend-url";

import './detail.scss';


const Detail = () => {
    const {id} = useParams();
    const [person, setPerson] = useState(null);
    
    
    
    useEffect(() => {
        // get the detail info abou the user
        axios.get(`${baseURL}/starwars/people/${id}`).then(response => {
            setPerson(response.data);
        })
    }, [])



    return (
        <div className="detail-page-wrap">
            <div className="detail-page-cover">
                <div className="detail-page-content">
                    {person ? (<DetailCard person={person} />) :(<div style={{color: "white", fontWeight:"bold", fontSize:"100px"}}>Loading <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i></div>)}
                </div>
            </div>
        </div>
    )
}



export default Detail;