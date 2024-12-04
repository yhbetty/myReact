import { useEffect, useState } from "react"

function App() {
    // 使用者名稱
    const [inputUserName, setInputUserName] = useState("");
    // 縣市名
    const [selCity, setSelCity] = useState("");
    // 建立縣市陣列
    const location = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市",];
    // 閱讀確認
    const [check, setCheck] = useState(false);
    // 複選：多個核取方塊
    const [chkList, setCheList] = useState([]);
    const arrList = ["HTML", "CSS", "JS"]
    // 建立函式處理被勾選的項目
    const handleChkList = (e) => {
        // console.log(e.target.value);
        // 使用其餘運算子保留已經被勾選掉的項目+目前被勾選的項目
        // 檢查是被勾選
        if (e.target.checked) {
            // 是 => 原本加新的
            setCheList([...chkList, e.target.value]);
        } else {
            // 否 => 從原本被勾選的項目中，拿掉不要的(filter)
            setCheList(
                chkList.filter((list) => { return list !== e.target.value; })
            );
        }
    };

    // 選項按鈕
    const [q1Ans, setQ1Ans] = useState('');
    const [q2Ans, setQ2Ans] = useState('');

    // 統計次數
    const [ans1Count, setAns1Count] = useState(0);
    const [ans2Count, setAns2Count] = useState(0);
    const [ans3Count, setAns3Count] = useState(0);

    useEffect(() => {
        const btn1 = document.getElementById('btn1');
        btn1.addEventListener('click', totCount);

        function totCount(){
            alert('hi')
        }
    },[]);


    return (
        <>
            <h1>React表單</h1>
            <hr />
            {/* input */}
            <label htmlFor="username">使用者名稱</label>
            <input type="text" id="username"
                value={inputUserName}
                onChange={(e) => {
                    setInputUserName(e.target.value);
                }}
            />{inputUserName}
            <br />
            {/* select */}
            <label htmlFor="city">縣市名</label>
            <select name="" id="city"
                value={selCity}
                onChange={(e) => {
                    setSelCity(e.target.value);
                }}
            >
                {/* 逐行寫法 */}
                {/* <option value="" disabled>請選擇</option>
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="台中市">台中市</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option> */}

                {/* 讀取陣列寫法 */}
                <option value="" disabled>請選擇</option>
                {
                    location.map((city) => {
                        return <option value={city} key={city} >{city}</option>
                    })
                }
            </select>{selCity}
            <br />


            {/* 單一核取方塊 */}
            <label htmlFor="isCheck">閱讀確認</label>
            <input type="checkbox" id="isCheck"
                value={check}
                onChange={(e) => {
                    // 處理勾選值的變化
                    setCheck(e.target.checked);
                }} />{check.toString()}
            <br />
            {/* 複選：多個核取方塊 */}

            {/* <input type="checkbox" id="chkList1" name="like" value="HTML" onChange={handleChkList} />
            <label htmlFor="chList1">HTML</label>
            <input type="checkbox" id="chkList2" name="like" value="CSS" onChange={handleChkList} />
            <label htmlFor="chList2">CSS</label>
            <input type="checkbox" id="chkList3" name="like" value="JS" onChange={handleChkList} />
            <label htmlFor="chList3">JS</label> */}
            {
                arrList.map((list) => {
                    return <div key={list}>
                        <input type="checkbox" id={list} name="like"
                            value={list}
                            onChange={handleChkList}
                        />
                        <label htmlFor={list}>{list}</label>
                    </div>
                })
            }

            <br />
            {chkList}

            <br />
            {/* 選項按鈕 */}
            1. 選擇喜歡的蛋糕：
            <input type="radio" name="Q1" value="乳酪蛋糕" id="q1-1" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-1">乳酪蛋糕</label>


            <input type="radio" name="Q1" value="提拉米蘇" id="q1-2" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-2">提拉米蘇</label>

            <input type="radio" name="Q1" value="巧克力蛋糕" id="q1-3" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-3">巧克力蛋糕</label>
            <br />
            您選擇的蛋糕是：{q1Ans}
            <br />
            <br />

            2. 選擇喜歡的飲料：
            <input type="radio" name="Q2" value="奶蓋紅茶" id="q2-1" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-1">奶蓋紅茶</label>


            <input type="radio" name="Q2" value="金萱雙Q" id="q2-2" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-2">金萱雙Q</label>

            <input type="radio" name="Q2" value="焦糖拿鐵" id="q2-3" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-3">焦糖拿鐵</label>
            <br />
            您選擇的飲料是：{q2Ans}
            <br />
            <br />
            <button onClick={() => {
                // 送出時將所有次數歸零
                setAns1Count(0);
                setAns2Count(0);
                setAns3Count(0);
                // 統計次數
                // 第一題
                const q1a = document.getElementById('q1-1');
                if (q1a.checked) {
                    setAns1Count(ans1Count + 1);
                }
                const q1b = document.getElementById('q1-2');
                if (q1b.checked) {
                    setAns2Count(ans2Count + 1);
                }
                const q1c = document.getElementById('q1-3');
                if (q1c.checked) {
                    setAns3Count(ans3Count + 1);
                }
                // 第二題
                const q2a = document.getElementById('q2-1');
                if (q2a.checked) {
                    setAns1Count(ans1Count + 1);
                }
                const q2b = document.getElementById('q2-2');
                if (q2b.checked) {
                    setAns2Count(ans2Count + 1);
                }
                const q2c = document.getElementById('q2-3');
                if (q2c.checked) {
                    setAns3Count(ans3Count + 1);
                }
            }}>送出統計結果</button>
            <br />
            <br />
            顯示統計次數結果：
            <p>選項一：{ans1Count}</p>
            <p>選項二：{ans2Count}</p>
            <p>選項三：{ans3Count}</p>


        </>
    )
}

export default App