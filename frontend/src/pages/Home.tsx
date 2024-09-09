import { useState } from "react";
import Optionalrenderer from "../components/Optionalrenderer";

function Home() {
  const [task, setTask] = useState("send");

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className=" flex flex-col">
        <div className="flex justify-center mt-4 lg:mt-8">
          <span className="text-2xl lg:text-5xl">File~Flux</span>
        </div>
        <div className="flex justify-center mt-2 lg:mt-4">
          <span className="lg:text-3xl">
            Realtime file sharing made easy ...{" "}
          </span>
        </div>
        <div className="flex flex-row justify-center lg:mt-8 xl:mt-24 text-2xl lg:text-3xl">
          <div
            className="mx-3 xl:mx-3 cursor-pointer"
            onClick={() => {
              setTask("send");
            }}
          >
            Send files
          </div>
          <div
            className="mx-3 xl:mx-3 cursor-pointer"
            onClick={() => {
              setTask("recieve");
            }}
          >
            Recieve files
          </div>
        </div>
        <div className="w-full mt-16 h-[24rem] flex flex-col justify-center items-center">
          <Optionalrenderer task={task} />
        </div>
      </div>
    </div>
  );
}

export default Home;
