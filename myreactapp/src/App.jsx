import axios from "axios";
import { div } from "motion/react-client";
import { useEffect, useRef, useState } from "react";

export default function App() {
    // 驗證是否連上unsplash api
    // https://api.unsplash.com/search/photos/?client_id=自己的accessKey
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = 'ITG1aVBn27Xg0V6LscbzzmErWw5grVAokm33ERuKDhY';
    const [filterString, setFilterString] = useState('dog');
    // 建立列表用的陣列
    const [jsonData, setJsonData] = useState([]);
    // 讀取變數
    const isLoading = useRef(false);
    // 頁數
    const currentPage = useRef(1);

    // 建立非同步方法，取得遠端資料
    const getPhotos = async (page = 1, isNew = ture) => {
        try {
            isLoading.current = true;
            // console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
            // 發出請求給遠端api，傳回結果
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            // 全部資料
            // console.log(result);
            // 顯示10筆記錄
            console.log(result.data.results);

            // 更新陣列列表資料(只會保存當前頁的資料)
            // setJsonData(result.data.results);

            // 若要保存不同頁的資料，就要加上...展開語法
            setJsonData((preData) => {
                // 是否為新的關鍵字，若為新的關鍵字，則覆蓋目前的關鍵字結果
                if (isNew) {
                    return [...result.data.results];
                }
                // 保持先前的資料+當前的資料
                return [...preData, ...result.data.results];
            });

            //  更新頁數
            currentPage.current = page;

            // 1秒後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);

        } catch (error) {
            // 錯誤發生時，顯示訊息
            console.log(error);
        }
    }

    // 列表高度
    const listRef = useRef(null);
    // 避免重新渲染，所有寫在useEffect中
    useEffect(() => {
        getPhotos(1, true);
        // 滾動監聽函式
        const scrollEvent = () => {
            // console.dir(listRef.current);
            // 取得目前圖片列表的高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight;
            //
            if (!isLoading.current && window.scrollY >= height) {
                // 頁數+1
                currentPage.current++;
                // 同一個關鍵字的資料不用覆蓋‧所以補上false
                getPhotos(currentPage.current, false);
            }
        }
        // 滾動監聽
        window.addEventListener('scroll', scrollEvent);
        // 移除監聽
        return () => window.removeEventListener('scroll', scrollEvent);
    }, [filterString]);

    // 建立顯示圖片元件
    const ShowPhoto = () => {
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }

    // 建立搜尋列元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div style={{
                textAlign: "center",
                margin: "50px 0"
            }}
            >
                <label htmlFor="filter">請輸入搜尋文字</label>
                <input type="text" id="filter"
                    defaultValue={filterString}
                    onKeyUp={onSearchHandler}
                />
            </div>
        )
    }

    // 按下Enter鍵時，更改filterString資料的函式
    const onSearchHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterString(e.target.value);
        }
    }
    // 渲染時使用JSX語法，若要使用JS語法，前後加{}
    return (
        <>
            <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />
            <div style={{ display: "flex", flexWrap: "wrap" }} ref={listRef}>
                <ShowPhoto />
            </div>
        </>
    )
}