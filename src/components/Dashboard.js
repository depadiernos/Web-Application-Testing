import React from "react";
import styled from "styled-components";

const Style = styled.div``;

export default function Dashboard(props) {
  return (
    <Style>
      <button id="ball" onClick={() => props.handleClick('ballCount', props.data.ballCount)}>
        Ball
      </button>
      <button id="strike" onClick={() => props.handleClick('strikeCount', props.data.strikeCount)}>
        Strike
      </button>
      <button id="foul" onClick={() => props.handleClick('foulCount', props.data.foulCount)}>
        Foul
      </button>
      <button id="hit" onClick={() => props.handleClick('hitCount', props.data.hitCount)}>
        Hit
      </button>
    </Style>
  );
}
