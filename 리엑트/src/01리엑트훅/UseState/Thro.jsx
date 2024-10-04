//Throttle - (쓰로틀링 ) 함수가 한번 호출 되면, 일정 시간이 지나기 전에 다시 호출되지 않도록 막는것
// 예를 들어 게임의 스킬이 발동되면 쿨타임 동안 스킬이 발동안되다가 쿨타이밍 지나면 스킬을 쓰는 것

import { useRef, useState } from "react";
import './Thro.css';


function hackLoottoNumbers() {
    console.log('로또번호 생성중');
    // const lottoNumbers =[];
    // for (let i= 0 ; i< 6; i++){
    //     const number = Math.floor(Math.random() * 45 ) + 1;  // 1부터 45 사이의 랜덤 숫자 생성
    //     lottoNumbers.push(number);

    // }
    // return lottoNumbers;


    // 숫자 중복 안되게 하는법
        const lottoNumbers = new Set(); // Set을 사용하여 중복을 방지 
        
        while (lottoNumbers.size < 6) {
            const number = Math.floor(Math.random() * 45) + 1; 
            lottoNumbers.add(number); // Set에 추가 (중복은 자동으로 제거됨)
        }
        
        return Array.from(lottoNumbers); // Set을 배열로 변환하여 반환
    }
    


function Thro() {
    const [lottoNumbers, setLottoNumbers] = useState ([0 ,0, 0, 0, 0 ,0]);

    //쓰로틀링           Date.now 사용시  1970년 1월 1일 0시 0분 0초 부터 현재 까지 경과된 시간을 1~2초 단위로 반환해준다
    const lastRun = useRef(Date.now()); 

    //********************************************* */
    const handleClick = () => {
        //쓰로틀링
        const timeElapsed =  Date.now() - lastRun.current;
        if(timeElapsed >= 1000){

             const result = hackLoottoNumbers();
             setLottoNumbers (result);
             lastRun.current = Date.now();
       }
        //******************* 아무리 빨리 클릭해도 1초에 한번만 클릭된다      개발자에 돈을 아낄수있다*/


    //     const result = hackLoottoNumbers();
    //     setLottoNumbers (result);
    };

    return(
        <div className= "container">
        <h1 className = "title"> 로또번호 맟춰줄께요 🤩</h1>
       <button className = "button" onClick={handleClick }>
       번호 맞추기
       </button>
       <div className="numbers">
       {lottoNumbers.map((number, idx)=>(
           <span key = {idx} className="number">
           {number}
           </span>
       ))}
       
       </div>
   </div>

    );
    
}

export default Thro;