import { useMemo } from "react";
import { useState } from "react";

export default function App() {
    const prodData = [
        {
            id: 1,
            title: '摩卡可可脆片',
            imgUrl: "./images/1.jpg",
            price: 80,

        },
        {
            id: 2,
            title: '黃金獵犬',
            price: 500,
            imgUrl: "./images/2.jpg"
        },
        {
            id: 3,
            title: '魔杖',
            imgUrl: "./images/3.jpg",
            price: 150,
        },
        {
            id: 4,
            title: '奶蓋綠茶',
            imgUrl: "./images/4.jpg",
            price: 300,
        },
        {
            id: 5,
            title: '提拉米蘇',
            imgUrl: "./images/5.jpg",
            price: 680,
        },
    ];

    // 建立表格元件
    const ProdTable = ({ filterProds }) => {
        return (
            <>
                <table style={{ width: "500px", marginTop: "20px", }}>
                    <tbody>
                        {
                            filterProds.map((prod) => {
                                return (
                                    <tr key={prod.id} >
                                        <td style={{
                                            borderBottom: "1px dashed #ccc",
                                            padding: "5px",
                                            width: "300px",
                                        }}>

                                            <img src={prod.imgUrl} alt="" style={{
                                                width: "100px",
                                                verticalAlign: "top",
                                                margin: "20px 0",
                                            }} /> <br />

                                            {prod.title}</td>
                                        <td>

                                        </td>
                                        <td
                                            style={{
                                                borderBottom: "1px dashed #ccc",
                                                padding: "5px",
                                                width: "200px",
                                                textAlign: "right",
                                            }}>{prod.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }

    // 陣列變數，預設為原商品陣列的資料
    const [prods, setProds] = useState(prodData);
    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);
    // 搜尋變數
    const [search, setSearch] = useState('');
    // 建立排序與搜尋的函式
    const filterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                return ascending ? a.price - b.price : b.price - a.price
            })
            .filter((prod) => {
                return prod.title.match(search);
            })
    }, [ascending, search]);

    return (
        <>
            <h1>useMemo搜尋與排序</h1>
            <hr style={{ marginBottom: "50px" }} />
            升降冪：
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => {
                    setAscending(e.target.checked)
                }}
            />
            <br />
            搜尋：
            <input
                type="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}

            />
            {/* 呼叫表格元件 */}
            <ProdTable filterProds={filterProds} />
        </>
    )
}