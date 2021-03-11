import React, { useEffect, useState } from "react";
import AllTeamContainer from "../AllTeamContainer/AllTeamContainer";
import Header from "../Header/Header";
import './mainContent.css'

const MainContainer = () => {
const [footballTeams, setFootballTeams] = useState([]);
useEffect(() => {
    const url ="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
    .then((res) => res.json())
    .then((data) => setFootballTeams(data.teams));
}, []);
return (
    <div className = 'main-container'>
    <Header />
    {
        footballTeams.map (footballTeam => <AllTeamContainer footballTeam ={footballTeam}  key = {footballTeam.idTeam}></AllTeamContainer>)
    }
    
    </div>
);
};

export default MainContainer;
