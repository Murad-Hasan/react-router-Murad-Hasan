import React from "react";
import "./AllTeamContainer.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const AllTeamContainer = (props) => {
  const { strTeamBadge, strTeam, strSport, idTeam } = props.footballTeam;
  return (
    <Container>
      <div className="cart">
        <img width={"90%"} src={strTeamBadge} alt="" />
        <h4>Club Name: {strTeam}</h4>
        <h4>Sport Type: {strSport}</h4>
        <Button as={Link} to={`/team/${idTeam}`}>
          Explore Club <FontAwesomeIcon icon={faArrowCircleRight} />
        </Button>
      </div>
    </Container>
  );
};

export default AllTeamContainer;
