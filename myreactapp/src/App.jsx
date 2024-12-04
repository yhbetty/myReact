import { useEffect, useState } from "react"
import axios from 'axios'
import { IoUmbrellaOutline } from "react-icons/io5"
import "./App.css"

function App() {
    const [weatherList, setWeatherList] = useState([]);
const arrData=[
    {},
    {},
]

    useEffect(() => {
        (async () => {
            //本地端要在web-server伺服器下才可執行
            // const data = await axios.get('./F-C0032-001');

            //json連結要公開
            const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            setWeatherList(location);
        })()
    }, [])

    return (
        // locationName=>縣市名
        // elementName[0]=Wx=>天氣概況
        // elementName[4]=>PoP=>降雨綠
        <>
            <div className="warp">
                <h2>36小時天氣預報</h2>
                <div className="container">
                    {weatherList.map((city) => {
                        return (
                            <div className="item" key={city.locationName}>
                                <h3>{city.locationName}</h3>
                                <div className="content">
                                    {city.weatherElement[0].time.map((time, index) => {
                                        return (
                                            <div className="item2" key={index}>

                                                {/* <p>4日</p> */}
                                                <p>
                                                    {
                                                        new Date(time[index].startTime).toLocaleString(undefined, {
                                                            day: 'numeric'
                                                        })
                                                    }
                                                </p>

                                                <p>
                                                    {/* 日期 */}
                                                    {
                                                        new Date(time.startTime).toLocaleString(undefined, {
                                                            hour: 'numeric',
                                                            minute: 'numeric'
                                                        })
                                                    }
                                                    <br />~<br />
                                                    {/* 時間 */}
                                                    {
                                                        new Date(time.endTime).toLocaleString(undefined, {
                                                            hour: 'numeric',
                                                            minute: 'numeric'
                                                        })
                                                    }
                                                </p>

                                                {/* 天氣圖 */}
                                                {/* <p><img src="./public/images/weatherIcon/晴時多雲.svg" alt="" /></p> */}
                                                <p><img src={`./public/images/weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                                                {/* 天氣圖名稱 */}
                                                {/* <p>晴時多雲</p> */}
                                                <p>{time.parameter.parameterName}</p>
                                                <p><IoUmbrellaOutline />10%</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default App