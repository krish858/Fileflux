import { useEffect } from "react";
import io from "socket.io-client";
import getRandomInt from "../assets/Randomno";
import { useNavigate } from "react-router-dom";

const socket = io('http://localhost:3000');


function Send() {
  const no = getRandomInt(10000, 99999);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit('create-room', no);
    socket.on('navSender',(roomId: string)=>{
      navigate(`/send/${roomId}`)
    })
  }, [no]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl xl:text-5xl">Verification Code</div>
      <br /> <br />
      <div className="text-5xl xl:text-6xl">{no}</div>
    </div>
  );
}

export default Send