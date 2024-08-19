import { useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const socket = io('http://localhost:3000');

function Recieve() {
    const [pin, setPin] = useState(["", "", "", "", ""]);
    const navigate = useNavigate();

  
    async function join(pin:Array<string>){
      const joiningcode = await pin.join('')
      socket.emit('join-room',(joiningcode))
      navigate(`/recieve/${joiningcode}`);
    }
  
    const handleChange = (e:any, index:number) => {
      const { value } = e.target;
      const newPin = [...pin];
      newPin[index] = value;
  
      setPin(newPin);
  
      if (value.length === 1 && index < 4) {
        const nextInput = document.getElementById(`pin-input-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    };
  
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl xl:text-5xl">Enter Verification Code</div>
        <br /> <br />
        <div className="flex space-x-2">
          {pin.map((value, index) => (
            <input
              key={index}
              id={`pin-input-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              pattern="[0-9]*"
              maxLength={1} 
              className="w-12 h-12 text-center text-xl border rounded"
            />
          ))}
        </div>
        <br />
        <div className="text-xl"><button className="px-4 py-1 bg-blue-400" type="button" onClick={()=>{join(pin)}}>Join</button></div>
      </div>
    );
}

export default Recieve