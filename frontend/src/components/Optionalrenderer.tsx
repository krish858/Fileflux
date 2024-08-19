import Send from "./Send"
import Recieve from "./Recieve"


function Optionalrenderer({task}:{task:string}){
  if(task == "send"){
    return(<Send/>)
  }
  if(task == "recieve"){
    return(<Recieve/>)
  }
}

export default Optionalrenderer