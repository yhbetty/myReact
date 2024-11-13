/* 推薦課程元件 */
function ShowContentClass() {
    //推薦課程資料
    const CourseData = [
        {
            id: 1,
            imgURL: "../public/images/unity.jpg",
            title: "Unity 5",
            desc: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
            teacher: "XXX",
            hour: "4",
            price: "1600",
            pricesale: "1200",
        },
        {
            id: 2,
            imgURL: "../public/images/gamesalad.jpg",
            title: "GameSalad 2D遊戲製作",
            desc: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
            teacher: "XXX",
            hour: "8",
            price: "3200",
            pricesale: "1600",
        },
        {
            id: 3,
            imgURL: "../public/images/gwd.jpg",
            title: "Google Web Design",
            desc: "用於建立HTML5廣告動畫。透過時間軸將各種物件和事件以動畫方式呈現",
            teacher: "XXX",
            hour: "8",
            price: "3200",
            price2: "1600",
        },
    ];

    return (
        <>
            {
                CourseData.map((item) => {
                    return (
                            <div className="class1" key={item.id}>
                                <p> <img src={item.imgURL} alt="Unity" /></p>
                                <h3 className="CT">{item.title}</h3>
                                <h3 className="classTitle">{item.desc}</h3>
                                <p className="TN">講師：{item.teacher}</p>
                                <p className="TN">影音課程時數：{item.hour}小時</p>
                                <p><span className="span1">原價 NT$ {item.price}</span> <span className="span2">NT$ {item.pricesale}</span></p>
                                <button>付款上課去</button>
                            </div>
                    )
                })
            }
        </>
    )
}

export default ShowContentClass