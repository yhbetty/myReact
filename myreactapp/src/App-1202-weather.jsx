import { useEffect, useState } from "react"
import axios from "react"
import { IoUmbrellaOutline } from "react-icons/io5";
import "./App.css"

function App() {

    return (
        <>
            <div className="warp">
                <h2>36小時天氣預報</h2>
                <div className="container">
                {/* 一列兩欄 */}
                <div className="row">
                    {/* 第一欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card"></div>
                        {/* 標題 */}
                        <div className="card-title">台北市</div>
                        {/* 內容 */}
                        <div className="card-body">
                            {/* 一列三欄 */}
                            <div className="row2">
                                {/* 第一欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>

                                {/* 第二欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>

                                {/* 第三欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 第二欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card"></div>
                        {/* 標題 */}
                        <div className="card-title">台北市</div>
                        {/* 內容 */}
                        <div className="card-body">
                            {/* 一列三欄 */}
                            <div className="row2">
                                {/* 第一欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>

                                {/* 第二欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>

                                {/* 第三欄 */}
                                <div className="col2">
                                    <p>2日</p>
                                    <p>
                                        上午6:00<br />
                                        ~<br />
                                        下午6:00<br />
                                    </p>
                                    <p>
                                        <img src="./public/images/weatherIcon/晴時多雲.svg" alt="" />
                                    </p>
                                    <p>晴時多雲</p>
                                    <p><IoUmbrellaOutline />10%</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default App