import { useEffect } from "react";

function App() {
    // 建立變色函式
    // 分開
    /*     const changeColor=() => {
            const p1 = document.getElementById('p1');
            p1.style.color = "orange"
            p1.style.fontWeight = "bold";
        }
    
        const restoreColor=() => {
            const p1 = document.getElementById('p1');
            p1.style.color = ""
            p1.style.fontWeight = "";
        }
     */

    // 合併
    useEffect(() => {
        const p1 = document.getElementById('p1');
        p1.addEventListener('mouseover', () => {
            p1.style.color = "orange";
            p1.style.fontWeight = "bold";
        })
        p1.addEventListener('mouseout', () => {
            p1.style.color = "";
            p1.style.fontWeight = "";
        })

        const p2 = document.getElementById('p2');
        p2.addEventListener('mouseover', () => {
            const p2 = document.querySelector('#p2');
            p2.textContent = "小藍";
            p2.style.color = "blue";
        })
        p2.addEventListener('mouseout', () => {
            const p2 = document.querySelector('#p2');
            p2.textContent = "變內容";
            p2.style.color = "";
        })

        const h1=document.getElementById('h1');
        let isClick=false;
        h1.addEventListener('click',(e)=>{
        if(isClick===false){
            e.target.textContent="click事件被觸發了";
            e.target.style.color="red";
            isClick=true;
        }else{
            e.target.textContent="滑鼠事件";
            e.target.style.color="";
            isClick=false;
        }
        })

    }, []);
            // const h1Text=h1.textContent;
            // alert(h1Text);

    //     if (isChange) {
    //         p1.style.color = "orange";
    //         p1.style.fontWeight = "bold";
    //     } else {
    //         p1.style.color = ""
    //         p1.style.fontWeight = "";
    //     }
    // }

    return (
        <>
            <h1 id="h1">滑鼠事件</h1>
            <hr />
            <p id="p1">變色</p>
            <p id="p2">變內容</p>
        </>
    )
}

export default App