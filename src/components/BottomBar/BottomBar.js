import React, { useCallback } from 'react';
import styled from 'styled-components';

const BottomBar = ({
  clickChat,
  clickCameraDevice,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices
}) => {
  const handleToggle = useCallback(
    (e) => {
      setShowVideoDevices((state) => !state);
    },
    [setShowVideoDevices]
  );

  return (
    <Bar>
      <Left>
      <ColumnItems>
        <CameraButton onClick={toggleCameraAudio} data-switch='video'>
          <div>
            {userVideoAudio.video ? (
              <FaIcon className='fas fa-video'></FaIcon>
            ) : (
              <FaIcon className='fas fa-video-slash'></FaIcon>
            )}
          </div>
        </CameraButton>
        {showVideoDevices && (
          <SwitchList>
            {videoDevices.length > 0 &&
              videoDevices.map((device) => {
                return <div key={device.deviceId} onClick={clickCameraDevice} data-value={device.deviceId} >{device.label}</div>;
              })}
            <div>Switch Camera</div>
          </SwitchList>
        )}
        <SwitchMenu onClick={handleToggle}>
          <i className='fas fa-angle-up'></i>
        </SwitchMenu>
        <CameraButton onClick={toggleCameraAudio} data-switch='audio'>
          <div>
            {userVideoAudio.audio ? (
              <FaIcon className='fas fa-microphone'></FaIcon>
            ) : (
              <FaIcon className='fas fa-microphone-slash'></FaIcon>
            )}
          </div>
        </CameraButton>
        </ColumnItems>
      </Left>
      
      <Center>
      <ColumnItems>
        <ChatButton onClick={clickChat}>
          <div>
            <FaIcon className='fas fa-comments'></FaIcon>
          </div>
        </ChatButton>
        <ScreenButton onClick={clickScreenSharing}>
          <div>
            <FaIcon
              className={`fas fa-desktop ${screenShare ? 'sharing' : ''}`}
            ></FaIcon>
          </div>
        </ScreenButton>
        </ColumnItems>
      </Center>
      
      <Right>
        <StopButton onClick={goToBack}>Leave</StopButton>
      </Right>
    </Bar>
  );
};


const Bar = styled.div`
  position: fixed;
  top: 20px; /* Corrected the typo here */
  left: 20px;
  bottom: 90px;
  height: 80%;
  width: 6%;
  display: flex;
  flex-direction: column; /* Display items in a column */
  justify-content: flex-start; /* Align items to the top */
  align-items: center;
  font-weight: 500;
  background-color: rgba(241, 239, 239, 0.7); /* Semi-transparent background color */
  backdrop-filter: blur(5px); 
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px 0 10px 0; /* Add top and bottom margins of 10px */
`;

const ColumnItems = styled.div`
  display: flex;
  flex-direction: column; /* Display items in a single line column */
  align-items: center;
  
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  margin-left: 15px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div``;

const ChatButton = styled.div`
  border: none;
  font-size: 0.9375rem;
  padding: 8px;
  color: #ff9431;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 30px 0 10px 0;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);

  :hover {
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  color: #ff9431;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 30px 0 10px 0;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);

  :hover {
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const StopButton = styled.div`
  width: 75px;
  height: 30px;
  border: none;
  font-size: 0.9375rem;
  line-height: 30px;
  margin-right: 15px;
  background-color: #f4281d;
  border-radius: 15px;
  padding: 5px;
  margin: 0 0 10px;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);

  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

const CameraButton = styled.div`
  position: relative;
  border: none;
  font-size: 0.9375rem;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 50px 11px 10px 0px;
  color: #ff9431;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);

  :hover {
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const SwitchMenu = styled.div`
  display: flex;
  position: absolute;
  width: 20px;
  top: 8px;
  left: 80px;
  z-index: 1;
  color: #ff9431;
  padding: 3px;
  background-color: #ffffff;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;

const SwitchList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -40.95px;
  left: 130px;
  background-color: #ff9431;
  color: white;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;
  border-radius: 20px;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;

export default BottomBar;