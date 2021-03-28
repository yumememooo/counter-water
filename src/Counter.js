import styled from "@emotion/styled";
import React from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

import waterIcon from "./images/summer-cold-water.svg";

const Container = styled.div`
  background-color: skyblue;
  height: 150px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
`;

export default function Counter() {
  const count = 0;

  return (
    <Container>
      <ActionBlock>
        <GrSubtract />
      </ActionBlock>

      <ItemBlock>
        <img src={waterIcon} alt="waterIcon" />
        <div> {count}</div>
      </ItemBlock>
      <ActionBlock>
        <GrAdd />
      </ActionBlock>
    </Container>
  );
}
