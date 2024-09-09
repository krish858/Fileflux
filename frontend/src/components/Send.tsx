import getRandomInt from "../assets/Randomno";
import { useNavigate } from "react-router-dom";

function Send() {
  const no = getRandomInt(10000, 99999);
  const navigate = useNavigate();

  function makeroom() {
    navigate(`/send/${no}`);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl xl:text-5xl">Verification Code</div>
      <br /> <br />
      <div className="text-5xl xl:text-6xl">{no}</div>
      <br />
      <button
        type="button"
        onClick={makeroom}
        className="text-xl bg-blue-400 p-1"
      >
        Make Room
      </button>
    </div>
  );
}

export default Send;
