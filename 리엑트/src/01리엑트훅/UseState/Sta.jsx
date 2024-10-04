// useState - 간편나게 생성하고 업데이트 시켜줄수있는 도구를 제공
// State - 컴포넌트(재사용 가능한 각각의 독립된 모듈 )의 상태

//  const[State,setState] = useState(초기값);

//  [State,setState] 변경가능 ex) [time,setTime]

//  [time,setTime] = useState(5); 가정하면

// state :  time = 5 (초기값 )        시간을 변경할려면 setTime(6);     초기값이 6으로 변경됨


// setState 를 사용해서 State 변경할때마다 컴포넌트는 다시 렌더링
// State 변경할때 새로변경될 State 값이 이전 State 값과 연관이 되어
// setState 의 인자로 새로운 State 를 리턴하는 콜백함수를 넣어주는게 좋다
// useState 를 사용해서 초기값을 받아올때 어떤 무거운 일을 해야한다면
// useState 의 인자로 콜백함수를 넣어주면 맨 처음 렌더링이 될때만 실행되게 할수있다





import { useState } from "react";

//콜백 형태로 변환하면 무겁지 않게 만들어준다
const heavywork =()=>{
    return ['정처', '산기']
}
///////////////////////////////////////////// 

function Sta(){

    const [time, setTime] = useState(1);
    // const handClick =()=>{
    //     setTime(time+1);
    // };                시간이 하나씩올라감

    const handClick =()=>{
        let newTime;
        if (time >= 12){
            newTime = 1;
        }else{
            newTime = time +1;
        }
        setTime(newTime);     
    };
    // 12시가 되면 1시로 바뀜


    ////////////////////////////////////////////////////////////








console.log("업데이트!")

//콜백 형태로 변환하면 무겁지 않게 만들어준다
const[names,setName] =useState(()=>{
    return heavywork();
});

////////////////////////////////////////
const[input,setInput] = useState('');
 
const haedInput =(e)=>{
setInput(e.target.value);
};

const addclick =()=>{
 setName((prevState)=>{
    return([input,...prevState]);
 });
};


     return(
        <main>
            <div>          
                <span>현재 시각 : {time}시</span>
                <button onClick={handClick}>Update</button>
            </div>

            <div>
                <input type="text" value={input} onChange={haedInput}/>
                <button onClick={addclick}>Upload</button>
                {names.map((name,idx) =>{
                    return <p key={idx}>{name}</p>;
                })}
                    
                

            </div>
        </main>
    );
           
  }
  
  export default Sta;