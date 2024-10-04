//useEffect
// 어떠한 컴퍼너트가 Mount(화면에 첫 렌더링) update(다시렌더링) unmount(화면에서 사라질때)
// 특정 작업을 처리할 코드들을 실행 시켜주고싶을때 useEffect 를 사용


// useEffect(()=>{}) 기본적으로 콜백함수를 받는다 /콜백 함수란 다른 함수의 인자로 전달된 함수를 의미 

// 첫 번째  렌더링 될때 마다 실행
// useEffect(()=>{
//     // 작업...
// });

// 두 번째  화면에 첫 렌더링 될때 실행, value값이 바뀔때 실행
// useEffect(()=>{
// // 작업...
// },[value]);


//  clean up 정리

// useEffect(()=>{
// // 구독...
// return()=>{
//     //구독해제...
// }

// },[value]);



import { useState , useEffect} from "react";
import Timer from "./UseState/componert/Timer";


function Eff(){
    const [count,setCount] = useState(1);
    const [name,setName] = useState('');

    const handcountupdade = ()=>{
        setCount(count +1);
    };

    const handcountChange =(e)=>{
        setName(e.target.value);
    };
 

     
    // 렌더링 실행될때마다 실행됨
    // useEffect(()=>{
    //     console.log('렌더링~~~~~')
    // });


    //렌더링 connt 변화 할때만 실행
    // useEffect(()=>{
    //     console.log('count 변화~~~~~')
    // },[count]);

    //렌더링 {item}만 변경될때
    // useEffect(()=>{
    //     console.log('라벨 변화~~~~~')
    // },[name]);


    //첫실행 될때만 실행
    useEffect(()=>{
        console.log('첫실행될때만 변화~~~~~')
    },[]);


    //클린 정리
    const [showTimer,setShowTimer] = useState(false);



    return(

        <main>
        <div>
            <button onClick={handcountupdade}>update</button>
            <span>count : {count}</span>

            <input type="text" value={name}  onChange={handcountChange}/>
            <span>name : {name} </span>
        </div>

       {/* 클린 정리  */}
        <div>
            {showTimer &&<Timer />}
            <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer</button>

        </div>


        </main>

    );
}
export default Eff;

