import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import socket from "../../socket";
import wire_top from "../../assets/wire_top.svg";
import wire_bottom from "../../assets/wire_bottom.svg";

const Main = (props) => {
  const roomRef = useRef();
  const userRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    socket.on("FE-error-user-exist", ({ error }) => {
      if (!error) {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;

        sessionStorage.setItem("user", userName);
        props.history.push(`/room/${roomName}`);
      } else {
        setErr(error);
        setErrMsg("User name already exist");
      }
    });
  }, [props.history]);

  function clickJoin() {
    const roomName = roomRef.current.value;
    const userName = userRef.current.value;

    if (!roomName || !userName) {
      setErr(true);
      setErrMsg("Enter Room Name or User Name");
    } else {
      socket.emit("BE-check-user", { roomId: roomName, userName });
    }
  }

  return (
    <div>
      <div>
        <WireTop>
          <img src={wire_top} />
        </WireTop>
      </div>
      <div>
        <WireBottom>
          <img src={wire_bottom} />
        </WireBottom>
      </div>
      <div>
        <div>
          <Heading>Join Meeting</Heading>
        </div>
        <div>
          <Text1>
            <label htmlFor="roomName" className="Input">Room Name</label>
          </Text1>
          <InputBox1>
            <input type="text" id="roomName" ref={roomRef} />
          </InputBox1>
        </div>
        <div>
          <Text2>
            <label htmlFor="userName" className="Input">User Name</label>
          </Text2>
          <InputBox2>
            <input type="text" id="userName" ref={userRef} />
          </InputBox2>
        </div>
        <JoinButton>
          <button onClick={clickJoin}>Join</button>
        </JoinButton>
      </div>
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background: linear-gradient(180deg, orange, orange);
`;

const WireTop = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const WireBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Text1 = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
  margin-right: 5px;
  position: absolute;
  top: 440px;
  right: 1000px;
`;

const Text2 = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
  margin-right: 5px;
  position: absolute;
  top: 530px;
  right: 1015px;
`;

const InputBox1 = styled.div`
  font-size: 30px;
  font-weight: 600;
  position: absolute;
  top: 430px;
  right: 780px;
  outline: none;
  padding: 10px;
  background-color: white;
  border: 2px solid orange; /* Add a 2px solid orange border */
  border-radius: 15px;
`;

const InputBox2 = styled.div`
  font-size: 30px;
  font-weight: 600;
  position: absolute;
  top: 520px;
  right: 780px;
  background-color: white;
  padding: 10px;
  outline: none;
  border: none;
  border: 2px solid orange; /* Add a 2px solid orange border */
  border-radius: 15px;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: orange;
  margin-right: 5px;
  position: absolute;
  top: 320px;
  right: 850px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 150px;
  height: 35px;
  margin-left: 15px;
  padding-left: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
`;

const Error = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #e85a71;
`;

const JoinButton = styled.button`
  position: absolute;
  height: 80px;
  width: 180px;
  top: 620px;
  right: 900px;
  border: 0px solid orange;
  border-radius: 15px;
  background-color: white;
  color: #ffffff;
  outline: none;
  font-size: 25px;
  font-weight: 800;

  :hover {
    border: 0px solid white;
    cursor: pointer;
    scale: 1.1;
  }
`;

export default Main;
