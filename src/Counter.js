import styled from "@emotion/styled";
import React, { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

import waterIcon from "./images/summer-cold-water.svg";

const Container = styled.div`
  background-color: skyblue;
  height: 150px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 10px 9px 8px -7px #5B534E; 
  box-shadow: 10px 9px 8px -7px #5B534E;
`;

const ActionBlock = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 80px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ItemBlock = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 60px;
  }
  font-family: Verdana;
  line-height: 1.75em;
`;

export const functionName = (params) => {

}

export default function Counter() {

  const [count, setCount] = useState(0);


  return (

    <Container  >
      { console.log('render')}
      <ActionBlock onClick={() => {
        setCount(count - 1);
        console.log(`current Count is ${count}`);
      }} style={{
        visibility: count <= 0 && 'hidden',
      }}
      >
        <GrSubtract />
      </ActionBlock>

      <ItemBlock>
        <img src={waterIcon} alt="waterIcon" />
        <div> {count}/10</div>
      </ItemBlock>
      <ActionBlock onClick={() => {
        setCount(count + 1);
        console.log(`current Count is ${count}`);
      }} style={{
        visibility: count >= 10 && 'hidden',
      }}>
        <GrAdd />
      </ActionBlock>
    </Container >
  );
}
