import React from "react";
import PropTypes from "prop-types";
import { Media } from "reactstrap";

function RenderLeader(props) {
  return (
    <Media>
      <Media left href="#">
        <Media object src={props.leader.image} alt="cat" />
      </Media>
      <Media body>
        <br></br>
        <Media heading>{props.leader.name}</Media>
        <p>{props.leader.designation}</p>
        <br></br>
        {props.leader.description}
      </Media>
    </Media>
  );
}

RenderLeader.propTypes = {};

export default RenderLeader;
