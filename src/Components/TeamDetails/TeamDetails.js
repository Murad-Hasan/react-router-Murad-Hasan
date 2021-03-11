import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import maleTeamPhoto from "../../Photo/male.png";
import feMaleTeamPhoto from "../../Photo/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faFutbol,
  faMars,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab);

const TeamDetails = () => {
  let { teamDetails } = useParams([]);
  const [teamInfo, setTeamInfo] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamDetails}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamInfo(data.teams[0]));
  }, [teamDetails]);
  let {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strTeamBadge,
    strStadiumThumb,
    strDescriptionEN,
    strStadiumDescription,
    strYoutube,
    strFacebook,
    strTwitter,
  } = teamInfo;

  return (
    <section id="team-details">
      <div>
        <img className="team-banner " src={strStadiumThumb} alt="" />
        <div className = "team-logo">
          <img  width={"200px"} src={strTeamBadge} alt="" />
        </div>
      </div>
      <div className="team-info">
        <div>
          <h3 className="text-center text-danger">Club Details</h3>
          <h1>{strTeam}</h1>
          <h6>
            <FontAwesomeIcon icon={faMapMarker} /> Founded Year: {intFormedYear}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
          </h6>
          <h6>
            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
          </h6>
        </div>
        
        <div>
          <h3 className="text-center text-danger">Team Photo</h3>

          {strGender === "Male" ? (
            <img src={maleTeamPhoto} alt="" />
          ) : (
            <img src={feMaleTeamPhoto} alt="" />
          )}
        </div>
      </div>
      <div className="text-justify">
        <p>{strDescriptionEN}</p>
        <p>{strStadiumDescription}</p>
      </div>
      <div className="text-center social-link">
        <a target={"_blank"} rel="noreferrer" href={`https://${strFacebook}`}>
          <FontAwesomeIcon className="ml-3" icon={["fab", "facebook"]} />
        </a>
        <a target={"_blank"} rel="noreferrer" href={`https://${strYoutube}`}>
          <FontAwesomeIcon className="ml-3 " icon={["fab", "youtube"]} />
        </a>
        <a target={"_blank"} rel="noreferrer" href={`https://${strTwitter}`}>
          <FontAwesomeIcon className="ml-3 " icon={["fab", "twitter"]} />
        </a>
      </div>
    </section>
  );
};

export default TeamDetails;
