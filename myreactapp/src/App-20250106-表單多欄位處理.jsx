import { useState } from "react"

export default function App() {

    // 同時處理不同欄位的資料(使用name屬性)
    const [formData, setFormData] = useState({
        uid: 'demo',
        upw: '1234',
        isChk: false,
    });

    const handleChange = (e) => {
        // // 值
        // console.log(e.target.value);
        // // 屬性
        // console.log(e.target.name);
        // // 資料型態
        // console.log(e.target.type);

        // 寫入異動的欄位
        // const value = e.target.value;

        /* 布林值資料的處理方式 */
        // if-else語法
        // let value;  // 不能用const因為資料會改變
        // if (e.target.type === 'checkbox') {
        //     value = e.target.checked;
        // } else {
        //     value = e.target.value;
        // }

        // 三元運算子
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; // const宣告不可重新賦值的變數


        const name = e.target.name;
        setFormData({
            ...formData,   // 使用其餘運算子帶出所有資料
            [name]: value, // 使用變數的方式帶入被異動欄位的屬性
        })
    }

    // 表單送出的函式
    const handleSubmit = (e) => {
        // 取消html的預設行為
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* 使用者名稱 */}
                    <div>
                        <label htmlFor="username">使用者名稱</label>
                        <input type="text" id="username"
                            name="uid" value={formData.uid} onChange={handleChange} />
                    </div>
                    {/* 密碼 */}
                    <div>
                        <label htmlFor="userpw">使用者密碼</label>
                        <input type="password" id="userpw"
                            name="upw" value={formData.upw} onChange={handleChange} />
                    </div>
                    {/* 確認狀態 */}
                    <div>
                        <label htmlFor="isCheck">確認狀態</label>
                        <input type="checkbox" id="isCheck"
                            name="isChk" value={formData.isChk} onChange={handleChange} />
                    </div>

                    <button type="submit">送出</button>
                </form>
            </div>
        </>
    )
}