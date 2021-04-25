import styled from "@emotion/styled";
import React, { useState } from "react";


const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  `;


const ModalContent = styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;
`;

const ModelClose = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`;



export default function Model() {


  const [modalDisplay, setModalDisplay] = useState("block");
  const doClose = () => {
    setModalDisplay("none")
  };

  //TODO
  return (
    <Modal style={{ display: modalDisplay }}>
      <ModalContent>
        <ModelClose onClick={doClose}>
          &times;</ModelClose>
        <p>Some text in the Modal..</p>
      </ModalContent >
    </Modal >
  );
}
