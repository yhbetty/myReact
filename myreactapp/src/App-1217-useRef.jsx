import { useState, useRef } from "react"; 

export default function App() {

    // const [Value, setValue] = useState('');    // 使用useState就會搭配onChange
    // 建立一個useRef的變數
    const inputRef = useRef(null);

    console.log('App render...')

    const submitHandler = () => {
        // console.log(Value);
        // 查看值
        console.log(inputRef.current.value);
        // 查看類型
        console.log(inputRef.current.type);
        // 更改類型為password
        inputRef.current.type="password";
    }
    return (
        <>
            {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler}>送出</button>
        </>
    )
}