import styled from "@emotion/styled";
import React, { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

import waterIcon from "./images/summer-cold-water.svg";

const Container = styled.div`
  background-color: #CFE5EE;
  height: 350px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;


const CounterBox = styled.div`
  background-color: #87ceeb;
  
  height: 150px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 10px 9px 8px -7px #5B534E; 
  box-shadow: 10px 9px 8px -7px #5B534E;
`;

const RecordBox = styled.div`
  background-color: #69A1B8;
  text-align: left; 
  color:#5D676B;
  height: 30px;
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

const SubtractAct = 'Subtract';
const AddAct = 'Add';

const Input = styled.input`
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;

export default function Counter() {

  const [count, setCount] = useState(0);

  const handelAction = (act) =>
    () => {
      if (act === SubtractAct) {
        setCount(count - 1);
      }
      if (act === AddAct) {
        setCount(count + 1);
      }
      console.log(`current Count is ${count}`);
    }
    ;

  //TODO
  return (

    <Container >
      <CounterBox>
        {console.log('render')}
        <ActionBlock onClick={handelAction(SubtractAct)}
          style={{
            visibility: count <= 0 && 'hidden',
          }}
        >
          <GrSubtract />
        </ActionBlock>

        <ItemBlock>
          <img src={waterIcon} alt="waterIcon" />
          <div > {count}
            {/* <Input type="number"></Input> TODO */}
        /10</div>
        </ItemBlock>
        <ActionBlock onClick={handelAction(AddAct)}
          style={{
            visibility: count >= 10 && 'hidden',
          }}>
          <GrAdd />
        </ActionBlock>
      </CounterBox>
      <RecordBox>
        Today:
      </RecordBox>
    </Container >



  );
}
