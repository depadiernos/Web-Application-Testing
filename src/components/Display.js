import React from "react";
import styled from "styled-components";

const Style = styled.div``;

export default function Dashboard(props) {
  return (
    <Style>
      <div id="ball">Ball: {props.data.ballCount}</div>
      <div id="strike">Strike: {props.data.strikeCount}</div>
      <div id="foul">Foul: {props.data.foulCount}</div>
      <div id="hit">Hit: {props.data.hitCount}</div>
    </Style>
  );
}
