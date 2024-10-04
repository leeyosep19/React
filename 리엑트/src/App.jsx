
import './App.css';
import { useState } from 'react';
import Sta from './01리엑트훅/UseState/Sta';
import Eff from './01리엑트훅/Eff';
import Thro from './01리엑트훅/UseState/Thro';



function App(){

  const [time, setTime] = useState(1);
  const handClick =()=>{
      setTime(time+1);
  };
   return(
    <main>
      <div>          
          <span>현재 시각 : {time}시</span>
          <button onClick={handClick}>Update</button>

          <Sta />
      </div>

      <div>
        <Eff />
      </div>

      <div>
        <Thro />
      </div>


      </main>
  );
         
}

export default App; 