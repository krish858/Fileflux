import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import toast from "react-hot-toast";

function Sender() {
  const navigate = useNavigate();
  const { roomid } = useParams();
  const socket = useMemo(() => io.connect("http://localhost:3000"), []);

  function checkroomid() {
    if (!roomid) {
      navigate("/");
      toast.error("Invalid room ID");
      return;
    }

    const parsedRoomId = parseInt(roomid, 10);

    if (parsedRoomId >= 99999 || parsedRoomId <= 10000) {
      navigate("/");
      toast.error("Invalid room ID");
      return;
    }
  }

  useEffect(() => {
    checkroomid();

    socket.on("connect", () => {
      console.log("connected");
      socket.emit("roomNo", roomid);

      //  @ts-ignore

      // socket.on("mess", (mess) => {
      //   console.log(mess);
      // });
    });
  }, [roomid, navigate]);

  return <div>Sender</div>;
}

export default Sender;
