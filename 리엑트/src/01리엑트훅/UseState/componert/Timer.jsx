import { useEffect } from "react";


const Timer=(props)=>{

    useEffect(()=>{
        const timer = setInterval(()=>{
             console.log('타이머가 돌아가는중...');
        },1000);
        // 버튼을 누르면 렌더링을 리셋 
        return()=>{
            clearInterval(timer);
            console.log('타이머가 종료되었습니다!')
        };
    },[]);
return(
    <div>
        <span> 타이머를 시작합니니다. 콘솔을 보세요!!</span>
    </div>
);


};

export default Timer;