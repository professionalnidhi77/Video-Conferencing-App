import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
const { roomID } = useParams();
const meeting =async(element) => {
    const appID = 4324578898988;
    const serverSecret =" 432r2r32dsdfghhjj";
    const kitToken = ZegoUIKitPrebuilt.
    generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Nidhi"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall,
        },
    });
};
    return <div ref={meeting} style={{width:"100vw", height:"100vh"}}></div>;
};

export default Room;