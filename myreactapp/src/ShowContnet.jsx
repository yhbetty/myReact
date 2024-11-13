//特色區元件
function ShowContnet() {
    //特色區資料
    const mainFData = [
        {
            id: 1,
            title: "教學影音",
            desc: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式",
        },
        {
            id: 2,
            title: "良性互動",
            desc: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決",
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展",
        },
    ];
    return (
        <>
            {
                mainFData.map((item) => {
                    return (                        
                            <div className='feature' key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>                      
                    );
                })
            }
        </>
    )
};

export default ShowContnet